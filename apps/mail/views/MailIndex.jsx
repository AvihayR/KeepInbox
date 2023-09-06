import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailAside } from "../cmps/MailAside.jsx"
const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function MailIndex() {
    const [mails, setMails] = useState(null)

    useEffect(() => {
        mailService.query()
            .then(setMails)
            .catch(err => console.log('Error:', err))
    }, [])

    if (!mails) return 'Loading...'
    return (
        <main className="main-mail flex space-between">
            <MailAside mails={mails} />
            <section className="mail-list-container">
                <MailFilter />
                <MailList mails={mails} setMails={setMails} />
            </section>
        </main>
    )
}

