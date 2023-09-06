// TODO:NotePreview that allow viewing the nots, preview and also changing color,pin etc... using dynamic component
// <NoteTxt>
// <NoteImg>
// <NoteVideo>
// <NoteTodos>

export function NotePreview({ note }) { 

    return (
        <article className="note-preview">
            <p>{note.info.txt}</p>
        </article>
    )
}
