import { mailService } from "../services/mail.service.js"

const { Fragment } = React
const { useNavigate, useParams } = ReactRouterDOM

export function MailPreview({ mail }) {
    const navigate = useNavigate()

    function readMail() {
        mail.isRead = true
        mailService.save(mail)
        console.log(mail)
    }

    return (
        <li className={`mail-preview-container ${mail.isRead ? 'read' : ''}`} onClick={() => {
            navigate(`/mail/${mail.id}`)
            readMail()
        }}>
            <span className="mail-from">{mail.from}</span>
            <span className="mail-subject">{mail.subject}</span>
        </li>
    )
}