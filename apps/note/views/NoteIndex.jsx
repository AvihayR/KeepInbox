import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/note.service.js"
import { NoteEdit } from "./NoteEdit.jsx"

const { useState, useEffect } = React

export function NoteIndex() {

    const [notes, setNotes] = useState(null)

    useEffect(() => {
        console.log('MOUNT')
        noteService.query().then(setNotes)
    }, [])

    function onRemoveNote(noteId) {
        noteService.remove(noteId)
            .then(() => {
                setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
            })
    }

    function onChangeColor(noteId, color) {
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note.id === noteId ? { ...note, style: { ...note.style, backgroundColor: color } } : note
          )
        )
      
        const noteToUpdate = notes.find((note) => note.id === noteId)
        if (noteToUpdate) {
          noteService.save({ ...noteToUpdate, style: { ...noteToUpdate.style, backgroundColor: color } })
        }
      }

        console.log('render')

        if (!notes) return <div>Loading...</div>
        return (
            <section className="note-index">
                <NoteEdit setNotes={setNotes} />
                <NoteList notes={notes} onRemoveNote={onRemoveNote} onChangeColor={onChangeColor} />
            </section>
        )
        //TODO: render NotePreview that allow viewing the nots, preview and also changing color,pin etc...
    }
