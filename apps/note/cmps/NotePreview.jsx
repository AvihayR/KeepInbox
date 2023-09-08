const { useState,useEffect } = React

export function NotePreview({ note }) {

    function DynamicCmp() {
        switch (note.type) {
            case 'NoteTxt':
                return <NoteTxt info={note.info} />
            case 'NoteImg':
                return <NoteImg info={note.info} />
            case 'NoteTodos':
                return <NoteTodos info={note.info} />
            case 'NoteVideo':
                return <NoteVideo info={note.info} />
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
    const [completedTodos, setCompletedTodos] = useState(
        JSON.parse(localStorage.getItem('completedTodos')) || []
      )

      function toggleTodoStatus(index) {
        const updatedCompletedTodos = [...completedTodos];
        if (updatedCompletedTodos.includes(index)) {
          // If it's in completed todos, remove it
          updatedCompletedTodos.splice(updatedCompletedTodos.indexOf(index), 1);
        } else {
          // If it's not in completed todos, add it
          updatedCompletedTodos.push(index);
        }
        setCompletedTodos(updatedCompletedTodos);
    
        // Save completed todos to localStorage
        localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedTodos));
      }
      
      function isTodoCompleted(index) {
        return completedTodos.includes(index);
      }

      return (
        <div className="note-todos">
          <h4>{title}</h4>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className={isTodoCompleted(index) ? "todo-done" : ""}>
                <input
                  type="checkbox"
                  id={todo.txt}
                  checked={isTodoCompleted(index)}
                  onChange={() => toggleTodoStatus(index)}
                />
                <label htmlFor={todo.txt}>{todo.txt}</label>
              </li>
            ))}
          </ul>
        </div>
      );
    }

function NoteVideo({ info }) {
    const { videoUrl } = info
    const videoId = getYouTubeVideoId(videoUrl)

    return (
        <div className="note-video">
            <iframe
                width="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
}

function getYouTubeVideoId(url) {
    const youtubeUrlRegex = /(?:https:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/
    const match = url.match(youtubeUrlRegex)
    if (match && match[1]) {
        return match[1]
    }
    return ""
}