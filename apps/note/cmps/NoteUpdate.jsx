const { useState } = React

export function NoteUpdate({ note, onUpdateNote }) {

    const [updatedText, setUpdatedText] = useState(note.info.txt)

    function handleChange({ target }) {
        const field = target.name
        const value = target.value

        setUpdatedText(value)

        const updatedNote = {
            ...note,
            info: {
                ...note.info,
                [field]: value,
            },
        }

        onUpdateNote(note.id, updatedNote)
    }




    return (
        <div className="edit-modal">
            <textarea className="editmode-area" name="txt" rows="4" cols="25" value={note.info.txt} placeholder="Type here.." onChange={handleChange} />
        </div>
    )

}