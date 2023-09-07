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
    const [sortByToEdit, setSortBy] = useState(mailService.getDefaultSort())

    useEffect(() => {
        mailService.query(filterByToEdit)
            .then(sortMails)
            .then(setMails)
            .catch(err => console.log('Error:', err))
    }, [filterByToEdit, sortByToEdit])

    function sortMails(mails) {
        if (sortByToEdit.title !== '') {
            return mails.sort((mail1, mail2) => mail1.subject.localeCompare(mail2.subject) * sortByToEdit.title)
        } else return mails
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
                <MailSort setSortBy={setSortBy} />
                <MailList mails={mails} setMails={setMails} />
            </section>
            {isCompose && <MailCompose setCompose={setCompose} setMails={setMails} />}
        </main>
    )
}

