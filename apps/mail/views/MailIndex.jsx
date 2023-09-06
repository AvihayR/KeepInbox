import { MailList } from "../cmps/MailList.jsx"
import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function MailIndex() {
    const [mails, setMails] = useState(null)

    useEffect(() => {
        mailService.query()
            .then(setMails)
            .catch(err => console.log('Error:', err))
    }, [])

    console.log(mails)

    if (!mails) return 'Loading...'
    return (
        <section className="mail-index">
            <MailList mails={mails} setMails={setMails} />
        </section>
    )
}

