const { useState, useEffect, useRef } = React
const { useNavigate, useParams } = ReactRouterDOM
import { noteService } from "../services/note.service.js"

export function NoteEdit({ setNotes }) {

    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyTxtNote())
    const [selectedNoteType, setSelectedNoteType] = useState('text')
    const [selectedFileName, setSelectedFileName] = useState("")
    const [drawingData, setDrawingData] = useState(null)
    const [newTodo, setNewTodo] = useState("")
    const canvasRef = useRef(null)
    const navigate = useNavigate()
    const params = useParams()


    useEffect(() => {
        if (params.noteId) loadNote()
    }, [])


    useEffect(() => {
        if (selectedNoteType === "draw") {
            const canvas = canvasRef.current
            const context = canvas.getContext('2d')
            let isDrawing = false

            function startDrawing(event) {
                isDrawing = true
                const x = event.touches[0].clientX - canvas.offsetLeft
                const y = event.touches[0].clientY - canvas.offsetTop
                context.beginPath()
                context.moveTo(x, y)
            }

            function draw(event) {
                if (!isDrawing) return
                const x = event.touches[0].clientX - canvas.offsetLeft
                const y = event.touches[0].clientY - canvas.offsetTop
                context.lineTo(x, y)
                context.stroke()
            }

            function stopDrawing() {
                isDrawing = false
                saveDrawing()
            }

            canvas.addEventListener('mousedown', startDrawing)
            canvas.addEventListener('mousemove', draw)
            canvas.addEventListener('mouseup', stopDrawing)
            canvas.addEventListener('mouseleave', stopDrawing)

            canvas.addEventListener('touchstart', startDrawing)
            canvas.addEventListener('touchmove', draw)
            canvas.addEventListener('touchend', stopDrawing)
            canvas.addEventListener('touchcancel', stopDrawing)

            return () => {
                canvas.removeEventListener('mousedown', startDrawing)
                canvas.removeEventListener('mousemove', draw)
                canvas.removeEventListener('mouseup', stopDrawing)
                canvas.removeEventListener('mouseleave', stopDrawing)

                canvas.removeEventListener('touchstart', startDrawing)
                canvas.removeEventListener('touchmove', draw)
                canvas.removeEventListener('touchend', stopDrawing)
                canvas.removeEventListener('touchcancel', stopDrawing)
            }
        }
    }, [selectedNoteType, drawingData])

    function loadNote() {
        noteService.get(params.noteId)
            .then(setNoteToEdit)
            .catch(err => console.log('err:', err))
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break

            case 'checkbox':
                value = target.checked
                break

            default:
                break
        }

        setNoteToEdit((prevNoteToEdit) => ({
            ...prevNoteToEdit,
            info: {
                ...prevNoteToEdit.info,
                [field]: value,
            },
        }))
    }

    function handleImageUpload(event) {
        const file = event.target.files[0]
        if (file) {
            setSelectedFileName(file.name)
            const reader = new FileReader()
            reader.onload = (ev) => {
                setNoteToEdit((prevNoteToEdit) => ({
                    ...prevNoteToEdit,
                    info: {
                        ...prevNoteToEdit.info,
                        url: ev.target.result,
                    },
                }))
            }
            reader.readAsDataURL(file)
        }
    }

    function onSaveNote(ev) {
        ev.preventDefault()

        if (selectedNoteType === "draw") {
            noteToEdit.info.drawingData = drawingData
            setSelectedNoteType('text')

        }

        noteService
            .save(noteToEdit)
            .then((savedNote) => {
                navigate("/note")
                setNotes((prevNotes) => [...prevNotes, savedNote])
                setNoteToEdit(noteService.getEmptyTxtNote())
            })
            .catch((err) => console.log("err", err))
    }

    function addTodo() {
        if (newTodo.trim() !== "") {
            setNoteToEdit(prevNote => ({
                ...prevNote,
                info: {
                    ...prevNote.info,
                    todos: [
                        ...(prevNote.info.todos || []),
                        { txt: newTodo, doneAt: null },
                    ],
                },
            }))
            setNewTodo("")
        }
    }

    function switchToTextNote() {
        setSelectedNoteType("text")
        setNoteToEdit(noteService.getEmptyTxtNote())
    }

    function switchToImgNote() {
        setSelectedNoteType("img")
        setNoteToEdit(noteService.getEmptyImgNote())
    }

    function switchToTodosNote() {
        setSelectedNoteType("todos")
        setNoteToEdit(noteService.getEmptyTodosNote())
    }

    function switchToVideoNote() {
        setSelectedNoteType("video")
        setNoteToEdit(noteService.getEmptyVideoNote())
    }

    function switchToDrawNote() {
        setSelectedNoteType("draw")
        setDrawingData(null)
        setNoteToEdit(noteService.getEmptyDrawNote())
    }

    function removeTodo(todoIndex) {
        setNoteToEdit(prevNote => ({
            ...prevNote,
            info: {
                ...prevNote.info,
                todos: prevNote.info.todos.filter((_, index) => index !== todoIndex),
            },
        }))
    }

    function saveDrawing() {
        const canvas = canvasRef.current
        const drawingDataURL = canvas.toDataURL()
        setDrawingData(drawingDataURL)
    }

    function clearCanvas() {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.clearRect(0, 0, canvas.width, canvas.height)
    }

    function renderNoteFields() {
        switch (selectedNoteType) {
            case "text":
                return (
                    <input
                        onChange={handleChange}
                        value={noteToEdit.info.txt || ""}
                        type="text"
                        placeholder="Take a note..."
                        name="txt"
                        id="text"
                    />
                )
            case "img":
                return (
                    <div className="file-input-container">
                        <label htmlFor="image-upload" className="file-input-label">
                            <i className="fa-solid fa-file-image"></i> {selectedFileName || "Choose Image"}
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            id="image-upload"
                            style={{ display: "none" }}
                        />
                        <input
                            onChange={handleChange}
                            value={noteToEdit.info.title || ""}
                            type="text"
                            placeholder="Image Title"
                            name="title"
                        />
                    </div>
                )
            case "todos":
                return (
                    <div>
                        <input
                            onChange={handleChange}
                            value={noteToEdit.info.title || ""}
                            type="text"
                            placeholder="List Title"
                            name="title"
                        />
                        <ul>
                            {noteToEdit.info.todos && noteToEdit.info.todos.map((todo, index) => (
                                <li key={index}>
                                    {todo.txt}
                                    <button type="button" onClick={() => removeTodo(index)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <div className="add-todo-container">
                            <input
                                type="text"
                                placeholder="New Todo"
                                value={newTodo}
                                onChange={(ev) => setNewTodo(ev.target.value)}
                            />
                            <button className="todos-btn" type="button" title="Add Todo" onClick={addTodo}><i className="fa-solid fa-circle-plus"></i></button>
                        </div>
                    </div>
                )
            case "video":
                return (
                    <input
                        onChange={handleChange}
                        value={noteToEdit.info.videoUrl || ""}
                        type="text"
                        placeholder="YouTube Video URL"
                        name="videoUrl"
                    />
                )
            case "draw":
                return (
                    <div>
                        <canvas
                            ref={canvasRef}
                            width={300}
                            height={200}
                            style={{ border: '1px solid #000' }}
                        ></canvas>
                        <button type="button" onClick={clearCanvas}><i className="fa-solid fa-eraser"></i></button>
                    </div>
                )
            default:
                return null
        }
    }


    return (
        <section className="note-edit">
            <form onSubmit={onSaveNote}>
                <div className="note-type-toggle">
                    <button
                        type="button"
                        onClick={switchToTextNote}
                        className={selectedNoteType === "text" ? "active" : ""}
                    >
                        <span className="btn-txt"> New note </span> <i className="fa-regular fa-note-sticky"></i>
                    </button>
                    <button
                        type="button"
                        onClick={switchToImgNote}
                        className={selectedNoteType === "img" ? "active" : ""}
                    >
                        <span className="btn-txt"> New image </span> <i className="fa-regular fa-images"></i>
                    </button>
                    <button
                        type="button"
                        onClick={switchToVideoNote}
                        className={selectedNoteType === "video" ? "active" : ""}
                    >
                        <span className="btn-txt"> New video </span> <i className="fa-brands fa-youtube"></i>
                    </button>
                    <button
                        type="button"
                        onClick={switchToTodosNote}
                        className={selectedNoteType === "todos" ? "active" : ""}
                    >
                        <span className="btn-txt"> New list </span> <i className="fa-regular fa-square-check"></i>
                    </button>
                    <button
                        type="button"
                        onClick={switchToDrawNote}
                        className={selectedNoteType === "draw" ? "active" : ""}
                    >
                        <span className="btn-txt"> Draw </span> <i className="fa-solid fa-paintbrush"></i>
                    </button>
                </div>
                {renderNoteFields()}
                <button className="sent">
                    <i className="fa-solid fa-plus"></i>
                </button>
            </form>
        </section>
    )
}