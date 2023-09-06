import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React
const { useParams, useNavigate, Outlet, useLocation } = ReactRouterDOM

export function MailDetails() {
    const [mail, setMail] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        mailService.get(params.mailId)
            .then(setMail)
    }, [])

    function renderMailHeader() {
        return (
            <section className="mail-details-header">
                <span className="mail-from">From {mail.from}</span>
                <span className="mail-to">To {mail.to}</span>
                <span className="mail-time">Time {mail.sentAt}</span>

            </section>
        )
    }
    if (!mail) return <span>Loading...</span>
    return (
        <section className="mail-container">
            <h1>{mail.subject}</h1>
            {renderMailHeader()}

            <article className="mail-content">
                {mail.body}
            </article>
        </section>
    )
}