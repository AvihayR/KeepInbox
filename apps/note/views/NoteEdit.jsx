const { useState } = React

import { noteService } from "../services/note.service.js"

export function NoteEdit({ setNotes }) {

    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())

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
                 console.log('note saved!')
                 setNotes((prevNotes) => [...prevNotes, savedNote])
                 setNoteToEdit(noteService.getEmptyNote())
                })
            .catch(err => console.log('err', err))
    }

    return (
        <section className="note-edit">
            <form onSubmit={onSaveNote}>
                <label htmlFor="text">Text:</label>
                <input onChange={handleChange} value={noteToEdit.info.txt} type="text" name="info.txt" id="text" />

                <button>Save</button>
            </form>
        </section>
    )
}