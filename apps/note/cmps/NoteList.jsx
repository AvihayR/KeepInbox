import { ColorPickerModal } from "./ColorPickerModal.jsx"
import { NotePreview } from "./NotePreview.jsx"
const { useState } = React
const { Link } = ReactRouterDOM

export function NoteList({ notes, onRemoveNote, onChangeColor }) {
    const [showColorPicker, setShowColorPicker] = useState(false)
    const [selectedNoteId, setSelectedNoteId] = useState(null)
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

    function handleColorButtonClick(noteId, event) {
        setSelectedNoteId(noteId)
        const rect = event.currentTarget.getBoundingClientRect()
        setModalPosition({ x: rect.left + window.scrollX, y: rect.top + window.scrollY })
        setShowColorPicker(true)
    }

    return (
        <ul className="note-list">
            {notes.map(note => (
                <li key={note.id} style={{ backgroundColor: note.style.backgroundColor }} >
                    {console.log('note ', note)}
                    <NotePreview note={note} />
                    <section>
                        <button onClick={(event) => handleColorButtonClick(note.id, event)}><i className="fa-solid fa-palette"></i></button>
                        <button> <Link to={`/note/${note.id}`}> <i className="fa-solid fa-pen-to-square"></i></Link></button>
                        <button onClick={() => onRemoveNote(note.id)}><i className="fa-solid fa-trash-can"></i></button>
                    </section>
                </li>
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
        </ul>
    )
}
