import { NotePreview } from "./NotePreview.jsx"
const { Link } = ReactRouterDOM

export function NoteList({ notes, onRemoveNote }) {
    return (
        <ul className="note-list">
            {notes.map(note =>
                <li key={note.id}>
                    <NotePreview note={note} />
                    <section>
                        <button> <Link to={`/note/${note.id}`}> <i className="fa-solid fa-pen-to-square"></i></Link></button>
                        <button onClick={() => onRemoveNote(note.id)}><i className="fa-solid fa-trash-can"></i></button>
                    </section>
                </li>
            )}
        </ul>
    )
}
