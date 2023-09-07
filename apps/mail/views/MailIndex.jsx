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

    useEffect(() => {
        mailService.query()
            .then(setMails)
            .catch(err => console.log('Error:', err))
    }, [])

    if (!mails) return 'Loading...'
    return (
        <main className="main-mail flex space-between">
            <MailAside mails={mails} setCompose={setCompose} />
            <section className="mail-list-container">
                <MailFilter />
                <MailList mails={mails} />
            </section>
            {isCompose && <MailCompose setCompose={setCompose} setMails={setMails} />}
        </main>
    )
}

