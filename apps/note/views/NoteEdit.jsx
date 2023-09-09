const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM
import { noteService } from "../services/note.service.js"

export function NoteEdit({ setNotes }) {
    
    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyTxtNote())
    const [selectedNoteType, setSelectedNoteType] = useState('text')
    const [selectedFileName, setSelectedFileName] = useState("")
    const [newTodo, setNewTodo] = useState("")
    const navigate = useNavigate()
    const params = useParams()


    useEffect(() => {
        if (params.noteId) loadNote()
    }, [])

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

    function removeTodo(todoIndex) {
        setNoteToEdit(prevNote => ({
            ...prevNote,
            info: {
                ...prevNote.info,
                todos: prevNote.info.todos.filter((_, index) => index !== todoIndex),
            },
        }))
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
                        Add a note
                    </button>
                    <button
                        type="button"
                        onClick={switchToImgNote}
                        className={selectedNoteType === "img" ? "active" : ""}
                    >
                        Add an image
                    </button>
                    <button
                        type="button"
                        onClick={switchToVideoNote}
                        className={selectedNoteType === "video" ? "active" : ""}
                    >
                        Add a video
                    </button>
                    <button
                        type="button"
                        onClick={switchToTodosNote}
                        className={selectedNoteType === "todos" ? "active" : ""}
                    >
                        Add a list
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