import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

var demoNotes = [
    {
        id: 'n101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: false,
        style: {
            backgroundColor: getRandomColor()
        },
        info: {
            txt: '"It\'s not about the shoes. It\'s about what you do in them." - Michael Jordan'
        }
    },
    {
        id: 'n102',
        createdAt: 1112255,
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: getRandomColor()
        },
        info: {
            txt: 'For tomorrow the code for the building is: 8456#'
        }
    },
    {
        id: 'n103',
        type: 'NoteImg',
        isPinned: true,
        info: {
            url: 'https://media.istockphoto.com/id/1185792622/photo/theres-no-buddy-like-a-travel-buddy.jpg?s=612x612&w=0&k=20&c=H6HN09lr6K8o_tPIJx_XyAf5tRLFHlBxslscXJ5E3FM=',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: getRandomColor()
        }
    },
    {
        id: 'n104',
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving license', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: getRandomColor()
        }
    },
    {
        id: 'n105',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'https://i0.wp.com/djalia-dz.com/en/wp-content/uploads/2023/08/Top-10-Tourist-Destinations-for-Summer-Vacations-Worldwide.jpg',
            title: 'Last summer trip'
        },
        style: {
            backgroundColor: getRandomColor()
        }
    },
    {
        id: 'n106',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif?cid=ecf05e478ggsr47k52n7w0qk49kmp9k9ziq2jqklmdaavvgm&ep=v1_gifs_gifId&rid=giphy.gif&ct=g',
            title: 'On my way'
        },
        style: {
            backgroundColor: getRandomColor()
        }
    },
    {
        id: 'n107',
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'TO DO',
            todos: [
                { txt: 'Buy groceries after work: milk, eggs, and bread.', doneAt: null },
                { txt: 'Pay the electricity bill by the end of the week.', doneAt: null },
                { txt: 'Don\'t forget to water the plants in the living room this evening.', doneAt: null }
            ]
        },
        style: {
            backgroundColor: getRandomColor()
        }
    },
    {
        id: 'n108',
        type: 'NoteImg',
        isPinned: true,
        info: {
            url: 'https://media0.giphy.com/media/11ZSwQNWba4YF2/giphy.gif?cid=ecf05e47cwp5ncwdzmspusyyw2t8z5hcy5mlhffl9mq2djnw&ep=v1_gifs_related&rid=giphy.gif&ct=g',
            title: ''
        },
        style: {
            backgroundColor: getRandomColor()
        }
    },
    {
        id: 'n109',
        type: 'NoteTodos',
        isPinned: true,
        info: {
            title: 'Shop List',
            todos: [
                { txt: 'Bamba', doneAt: null },
                { txt: 'Kinder Bueno', doneAt: null },
                { txt: 'Milk', doneAt: null },
                { txt: 'Fruits', doneAt: null },
                { txt: 'Milki', doneAt: null },
            ]
        },
        style: {
            backgroundColor: getRandomColor()
        }
    },
    {
        id: 'n110',
        type: 'NoteVideo',
        isPinned: false,
        style: {
            backgroundColor: getRandomColor()
        },
        info: {
            videoUrl: 'https://www.youtube.com/watch?v=6stlCkUDG_s&ab_channel=FreeHDvideos-nocopyright'
        },
    }
]
 
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyTxtNote,
    getEmptyImgNote,
    getEmptyTodosNote,
    getDefaultFilter,
    savePinnedNotes,
    loadPinnedNotes,
    getRandomColor,
    getEmptyVideoNote,
}

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
        .then((notes) => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regExp.test(note.info.txt||note.info.title))
            }

            if (filterBy.type) {
                notes = notes.filter(note => note.type === filterBy.type)
            }


            return notes
        })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
        .then(note => {
            return note
        })
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function getEmptyTxtNote() {
    return {
        createdAt: null,
        type: 'NoteTxt',
        isPinned: false,
        style: {
            backgroundColor: getRandomColor()
        },
        info: {
            txt: ''
        },
    }
}

function getEmptyImgNote() {
    return {
        createdAt: null,
        type: 'NoteImg',
        isPinned: false,
        style: {
            backgroundColor: getRandomColor()
        },
        info: {
            url: '',
            title: ''
        },
    }
}

function getEmptyTodosNote() {
    return {
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'TODO:',
            todos: [
                { txt: 'Go for a walk', doneAt: null },
                { txt: 'To do laundry', doneAt: null },
            ]
        },
        style: {
            backgroundColor: getRandomColor()
        }

    }
}
function getEmptyVideoNote() {
    return {
        type: "NoteVideo",
        isPinned: false,
        style: {
            backgroundColor: getRandomColor(),
        },
        info: {
            videoUrl: "",
        },
    }
}

function getDefaultFilter() {
    return { txt: '', type: ''  }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = demoNotes
        utilService.saveToStorage(NOTE_KEY, notes)
    }
}

function getRandomColor() {
    const colors = ['#faafa8', '#fff8b8', '#e2f6d3', '#b4ddd3', '#aeccdc', '#d3bfdb']
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

function savePinnedNotes(pinnedNotes) {
    localStorage.setItem('pinnedNotes', JSON.stringify(pinnedNotes))
  }
  
  function loadPinnedNotes() {
    const pinnedNotesJSON = localStorage.getItem('pinnedNotes')
    return JSON.parse(pinnedNotesJSON) || []
  }