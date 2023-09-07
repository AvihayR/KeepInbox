import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailAside } from "../cmps/MailAside.jsx"
import { MailCompose } from "../cmps/MailCompose.jsx"

const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [isCompose, setCompose] = useState(false)
    const [filterByToEdit, setFilterBy] = useState(mailService.getDefaultFilter())

    useEffect(() => {
        mailService.query(filterByToEdit)
            .then(setMails)
            .catch(err => console.log('Error:', err))
    }, [filterByToEdit])

    function onSetFilterBy(filterBy) {
        setFilterBy(filterBy)
        // setFilterBy({ txt: 'Miss', isRead: null })
    }

    if (!mails) return 'Loading...'
    return (
        <main className="main-mail flex space-between">
            <MailAside mails={mails} setCompose={setCompose} />
            <section className="mail-list-container">
                <MailFilter filterBy={filterByToEdit} onSetFilterBy={onSetFilterBy} />
                <MailList mails={mails} setMails={setMails} />
            </section>
            {isCompose && <MailCompose setCompose={setCompose} setMails={setMails} />}
        </main>
    )
}

