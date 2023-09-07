import { utilService } from "../../../services/util.service.js"
import { NoteFilter } from "../cmps/NoteFilter.jsx"
import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/note.service.js"
import { NoteEdit } from "./NoteEdit.jsx"


const { useState, useEffect } = React

export function NoteIndex() {

  const [notes, setNotes] = useState(null)
  const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())

  useEffect(() => {
    noteService.query(filterBy).then(setNotes)
  }, [filterBy])

  function onSetFilterBy(filterBy) {
    setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
  }

  function onPinNote(noteId) {
    const updatedNoteList = notes.map((note) => {
      if (note.id === noteId) {
        return { ...note, isPinned: !note.isPinned }
      }
      return note
    })


    setNotes(updatedNoteList)
    // setNotes(sortedNoteList)
  }

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

  function onDuplicateNote(note) {

    const { id, ...duplicatedNote } = note

    duplicatedNote.isPinned = false


    noteService.save(duplicatedNote)
      .then((savedNote) => {
        setNotes(prevNotes => [...prevNotes, savedNote])
      })
      .catch(err => console.log('err', err))
  }

  if (!notes) return <div>Loading...</div>
  return (
    <section className="note-index">
      <NoteFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
      <NoteEdit setNotes={setNotes} />
      <NoteList notes={notes} onDuplicateNote={onDuplicateNote} onPinNote={onPinNote} onRemoveNote={onRemoveNote} onChangeColor={onChangeColor} />
    </section>
  )
}
