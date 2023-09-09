export function NoteUpdate({ note, setNotes, onUpdateNote }) {

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
``
        const updatedNote = {
            ...note,
            info: {
                ...note.info,
                [field]: value,
            },
        }

        onUpdateNote(note.id, updatedNote)


        note.info[field] = value

        setNotes(prevNotes => {
            prevNotes = prevNotes.filter(prevNote => prevNote.id !== note.id)

            return [...prevNotes, note]
        })
    }

    return (
        <div className="edit-modal">
            <textarea className="editmode-area" name="txt" rows="4"  cols="25" value={note.info.txt} placeholder="Type here.." onChange={handleChange} />
        </div>
    )

}