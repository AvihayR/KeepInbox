const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM

import { noteService } from "../services/note.service.js"

export function NoteEdit({ setNotes }) {

    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())
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

        // setNoteToEdit(prevNoteToEdit => ({...prevNoteToEdit, [field]: value}))
        setNoteToEdit((prevNoteToEdit) => ({
            ...prevNoteToEdit,
            info: {
                ...prevNoteToEdit.info,
                txt: value,
            }
        }))
    }

    function onSaveNote(ev) {
        ev.preventDefault()
        noteService.save(noteToEdit)
            .then((savedNote) => {
                navigate('/note')
                setNotes((prevNotes) => [...prevNotes, savedNote])
                setNoteToEdit(noteService.getEmptyNote())
            })
            .catch(err => console.log('err', err))
    }

    return (
        <section className="note-edit">
            <form onSubmit={onSaveNote}>
                <input onChange={handleChange} value={noteToEdit.info.txt} type="text" placeholder="Take a note..." name="info.txt" id="text" />

                <button><i className="fa-solid fa-share"></i></button>
            </form>
        </section>
    )
}