import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const colors = ['#faafa8', '#fff8b8', '#e2f6d3', '#b4ddd3', '#aeccdc', '#d3bfdb'];
const NOTE_KEY = 'noteDB'

var demoNotes = [
    {
        id: 'n101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: getRandomColor(colors)
        },
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        id: 'n102',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'https://media3.giphy.com/media/l1KVaj5UcbHwrBMqI/giphy.gif?cid=ecf05e47pojxgnow0wzwje6bl6gewmwthjpgfbo5rkuib7vr&ep=v1_gifs_gifId&rid=giphy.gif&ct=g',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: getRandomColor(colors)
        }
    },
    {
        id: 'n103',
        createdAt: 1112255,
        type: 'NoteTxt',
        isPinned: false,
        style: {
            backgroundColor: getRandomColor(colors)
        },
        info: {
            txt: 'Here we go!'
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
            backgroundColor: getRandomColor(colors)
        }


    },
    {
        id: 'n105',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif?cid=ecf05e478ggsr47k52n7w0qk49kmp9k9ziq2jqklmdaavvgm&ep=v1_gifs_gifId&rid=giphy.gif&ct=g',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: getRandomColor(colors)
        }
    },
]

_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    getDefaultFilter,
}

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
        .then((notes) => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regExp.test(note.info.txt,))
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

function getEmptyNote() {
    return {
        createdAt: null,
        type: 'NoteTxt',
        isPinned: false,
        style: {
            backgroundColor: getRandomColor(colors)
        },
        info: {
            txt: ''
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

function getRandomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}
