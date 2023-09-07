import { ColorPickerModal } from "./ColorPickerModal.jsx"
import { NotePreview } from "./NotePreview.jsx"
const { useState } = React
const { Link } = ReactRouterDOM

export function NoteList({ notes, onRemoveNote, onChangeColor, onPinNote, onDuplicateNote }) {
    const [showColorPicker, setShowColorPicker] = useState(false)
    const [selectedNoteId, setSelectedNoteId] = useState(null)
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

    function handleColorButtonClick(noteId, event) {
        setSelectedNoteId(noteId)
        const rect = event.currentTarget.getBoundingClientRect()
        setModalPosition({ x: rect.left + window.scrollX, y: rect.top + window.scrollY })
        setShowColorPicker(true)
    }

    const sortedNotes = [...notes].sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1
        if (!a.isPinned && b.isPinned) return 1
        return 0
    })

    return (
        <div className="note-list">
            {sortedNotes.map(note => (
                <div className="note-container" key={note.id} style={{ backgroundColor: note.style.backgroundColor }} >
                    <button title="Pin note" className="pin-icon" onClick={() => { onPinNote(note.id) }}>{note.isPinned ? <i className="fa-solid fa-thumbtack"></i> : <i className="fa-solid fa-thumbtack" style={{color: 'rgba(89, 85, 98, 0.4)'}}></i> }</button>
                    <NotePreview note={note} />
                    <section>
                        <button title="Choose color" onClick={(event) => handleColorButtonClick(note.id, event)}><i className="fa-solid fa-palette"></i></button>
                        <button title="Edit note" > <Link to={`/note/${note.id}`}> <i className="fa-solid fa-pen-to-square"></i></Link></button>
                        <button title="Duplicate Note" onClick={() => onDuplicateNote(note)}><i className="fa-solid fa-clone"></i></button>
                        <button title="Remove note" onClick={() => onRemoveNote(note.id)}><i className="fa-solid fa-trash-can"></i></button>
                    </section>
                </div>
            ))}
            <ColorPickerModal
                isOpen={showColorPicker}
                onClose={() => setShowColorPicker(false)}
                onSelectColor={(color) => {
                    onChangeColor(selectedNoteId, color)
                    setSelectedNoteId(null)
                }}
                position={modalPosition}
            />
        </div>
    )
}
