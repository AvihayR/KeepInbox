// TODO:NotePreview that allow viewing the nots, preview and also changing color,pin etc... using dynamic component
// <NoteTxt>
// <NoteImg>
// <NoteVideo>
// <NoteTodos>

export function NotePreview({ note }) {

    return (
        <article className="note-preview">
            <p>{note.info.txt}</p>
            {note.type === 'NoteImg' &&
                <React.Fragment>
                    <h2>{note.info.title}</h2>
                    <img src={note.info.url} />
                </React.Fragment>
            }

            {note.type === 'NoteTodos' &&
                <React.Fragment>
                    <h4> {note.info.title} </h4>
                    <ul>
                        {note.info.todos.map(todo => <li key={todo.txt}>
                            <label htmlFor={todo.txt}>{todo.txt}</label>
                            <input type="checkbox" id={todo.txt} />

                        </li>)}
                    </ul>
                </React.Fragment>}

        </article>
    )
}
