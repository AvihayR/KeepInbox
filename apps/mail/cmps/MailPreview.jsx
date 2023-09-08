import { mailService } from "../services/mail.service.js"
import { utilService } from "../../../services/util.service.js"
import { RemoveButton } from "./RemoveBtn.jsx";
const { useNavigate, useParams } = ReactRouterDOM

export function MailPreview({ mail, setMails }) {
    const navigate = useNavigate()

    function readMail() {
        mail.isRead = true
        mailService.save(mail)
    }

    return (
        <li className={`mail-preview-container ${mail.isRead ? 'read' : ''}`} onClick={() => {
            navigate(`/mail/${mail.id}`)
            readMail()
        }}>
            <span className="mail-from">{mail.from}</span>
            <span className="mail-subject">{mail.subject}</span>
            <span className="mail-body">{`- ${mail.body}`}</span>

            <span className="mail-time">
                <RemoveButton mail={mail} setMails={setMails} />
                {utilService.formatDate(mail.sentAt)}
            </span>

        </li>
    )
}