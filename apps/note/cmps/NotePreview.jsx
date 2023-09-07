// TODO:NotePreview that allow viewing the nots, preview and also changing color,pin etc... using dynamic component
// <NoteTxt>
// <NoteImg>
// <NoteVideo>
// <NoteTodos>

export function NotePreview({ note }) {

    function DynamicCmp() {
        switch (note.type) {
            case 'NoteTxt':
                return <NoteTxt info={note.info} />
            case 'NoteImg':
                return <NoteImg info={note.info} />
            case 'NoteTodos':
                return <NoteTodos info={note.info} />
            default:
                return null
        }
    }

    return (
        <article className="note-preview " >
            {<DynamicCmp />}
        </article>
    )

}

function NoteTxt({ info }) {
    const { txt } = info
    return (
        <div className="note-txt">
            {txt}
        </div>
    )
}

function NoteImg({ info }) {
    const { url, title } = info

    return (
        <div className="note-img">
            <img src={url} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}

function NoteTodos({ info }) {
    const { title, todos } = info
    return (
      <div className="note-todos">
        <h4>{title}</h4>
        <ul>
          {todos.map(todo => (
            <li key={todo.txt}>
              <input type="checkbox" id={todo.txt} />
              <label htmlFor={todo.txt}>{todo.txt}</label>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
