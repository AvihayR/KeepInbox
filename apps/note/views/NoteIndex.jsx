import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/note.service.js"
import { NoteEdit } from "./NoteEdit.jsx"

const { useState, useEffect } = React

export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    

    useEffect(()=>{
        console.log('MOUNT')
        noteService.query().then(setNotes)
    }, [])

    function onRemoveNote(noteId) {
        noteService.remove(noteId)
        .then(() =>{
            setNotes(prevNotes => prevNotes.filter(note => note.id!== noteId))
        })
    }

    console.log('render')
    
    if (!notes) return <div>Loading...</div>
    return (
        <section className="note-index"> 
            <NoteEdit setNotes={setNotes}/>
            <NoteList notes={notes} onRemoveNote={onRemoveNote} />
        </section>
    )
    //TODO: render NotePreview that allow viewing the nots, preview and also changing color,pin etc...
}
