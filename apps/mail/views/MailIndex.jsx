import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
import { MailAside } from "../cmps/MailAside.jsx"
import { MailCompose } from "../cmps/MailCompose.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailSort } from "../cmps/MailSort.jsx"

const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [isCompose, setCompose] = useState(false)
    const [filterByToEdit, setFilterBy] = useState(mailService.getDefaultFilter())
    const [sortBy, setSortBy] = useState(mailService.getDefaultSort())

    useEffect(() => {
        mailService.query(filterByToEdit)
            .then(sortMails)
            .then(setMails)
            .catch(err => console.log('Error:', err))
    }, [filterByToEdit, sortBy])


    function sortMails(mails) {
        if (sortBy.subject) {
            mails = mails.sort((mail1, mail2) => mail1.subject.localeCompare(mail2.subject))
        } else if (sortBy.subject === false) {
            mails = mails.sort((mail1, mail2) => mail2.subject.localeCompare(mail1.subject))
        } else if (sortBy.sentAt) {
            mails = mails.sort((mail1, mail2) => mail2.sentAt - mail1.sentAt)
        } else if (sortBy.sentAt === false) {
            mails = mails.sort((mail1, mail2) => mail1.sentAt - mail2.sentAt)

        }

        return mails
    }

    function setBookSort(sortBy) {
        if (sortBy.name !== undefined) {
            gBooks.sort((book1, book2) => book1.name.localeCompare(book2.name) * sortBy.name)
        } else if (sortBy.price !== undefined) {
            gBooks.sort((book1, book2) => (book1.price - book2.price) * sortBy.price)
        }
    }

    function onSetFilterBy(filterBy) {
        setFilterBy(filterBy)
    }

    if (!mails) return 'Loading...'
    return (
        <main className="main-mail flex space-between">
            <MailAside mails={mails} setCompose={setCompose} />
            <section className="mail-list-container">
                <MailFilter filterBy={filterByToEdit} onSetFilterBy={onSetFilterBy} />
                <MailSort sortBy={sortBy} setSortBy={setSortBy} />
                <MailList mails={mails} setMails={setMails} />
            </section>
            {isCompose && <MailCompose setCompose={setCompose} setMails={setMails} />}
        </main>
    )
}

