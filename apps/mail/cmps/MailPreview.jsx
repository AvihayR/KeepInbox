import { mailService } from "../services/mail.service.js"
import { utilService } from "../../../services/util.service.js"
import { DynamicButton } from "./DynamicButton.jsx";

const { useNavigate, useParams } = ReactRouterDOM

export function MailPreview({ mail, setMails }) {
    const navigate = useNavigate()

    function readMail() {
        mail.isRead = true
        mailService.save(mail)
    }

    function removeMail(ev) {
        ev.stopPropagation()
        mailService.remove(mail.id)
            .then(setMails(prevMails => prevMails.filter(prevMail => prevMail !== mail)))
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

                <DynamicButton cmpType='remove' cb={removeMail} />
                {utilService.formatDate(mail.sentAt)}
            </span>
        </li>
    )
}