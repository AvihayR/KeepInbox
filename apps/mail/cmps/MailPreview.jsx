import { mailService } from "../services/mail.service.js"
import { utilService } from "../../../services/util.service.js"
import { RemoveButton } from "./RemoveBtn.jsx";
import { Star } from "./Star.jsx";

const { useNavigate, useParams } = ReactRouterDOM
const { useState } = React

export function MailPreview({ mail, setMails }) {
    const [isOverPreview, setIsOverPreview] = useState(false)
    const navigate = useNavigate()

    function readMail() {
        mail.isRead = true
        mailService.save(mail)
    }

    return (
        <li className={`mail-preview-container ${mail.isRead ? 'read' : ''}`} onMouseOver={() => { setIsOverPreview(true) }} onMouseLeave={() => { setIsOverPreview(false) }} onClick={() => {
            navigate(`/mail/${mail.id}`)
            readMail()
        }}>
            <span className="mail-from">
                <Star mail={mail} setMails={setMails} />
                {mail.from}
            </span>
            <span className="mail-subject">{mail.subject}</span>
            <span className="mail-body">{`- ${mail.body}`}</span>

            <span className="mail-time">
                {isOverPreview && <RemoveButton mail={mail} setMails={setMails} />}
                {!isOverPreview && utilService.formatDate(mail.sentAt)}
            </span>

        </li>
    )
}