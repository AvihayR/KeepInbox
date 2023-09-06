import { storageService } from '../../../services/async-storage.service.js'
import demoData from './demoData.js'
import { utilService } from '../../../services/util.service.js'

export const mailService = {
    query,
}

const MAIL_KEY = 'mailDB'

const loggedInUser = {
    email: 'micheal@keepinbox.com',
    fullName: 'Micheal Scott'
}

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930600,
    removedAt: null,
    from: 'someone@gmail.com',
    to: 'micheal@keepinbox.com'
}

// const eMailsDemoData = {
//     inbox: [...demoData],
//     sent: [],
//     trash: [],
//     draft: []
// }

const criteria = {
    status: 'inbox/sent/trash/draft',
    txt: 'puki', // no need to support complex text search
    isRead: true, // (optional property, if missing: show all)
    isStared: true, // (optional property, if missing: show all)
    labels: ['important', 'romantic'] // has any of the labels
}

_createMails()

function query() {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            return mails
        })
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = demoData
        utilService.saveToStorage(MAIL_KEY, mails)
    }
}

