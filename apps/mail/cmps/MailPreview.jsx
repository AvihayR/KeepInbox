import { mailService } from "../services/mail.service.js"
import { utilService } from "../../../services/util.service.js"
import { RemoveBtn } from "./RemoveBtn.jsx";
import { ReadBtn } from "./ReadBtn.jsx";
import { Star } from "./Star.jsx";

const { useNavigate, useParams } = ReactRouterDOM
const { useState } = React

export function MailPreview({ mail, setMails }) {
    const [isOverPreview, setIsOverPreview] = useState(false)
    const [isMailRead, setMailRead] = useState(false)
    const navigate = useNavigate()

    function onReadMail() {
        mail.isRead = true
        mailService.save(mail)
        setMailRead(true)
    }

    function onToggleMailRead() {
        mail.isRead = !mail.isRead
        mailService.save(mail)
        setMailRead(prevIsMailRead => !prevIsMailRead)
    }

    return (
        <li className={`mail-preview-container ${mail.isRead ? 'read' : ''}`}
            onMouseOver={() => { setIsOverPreview(true) }}
            onMouseLeave={() => { setIsOverPreview(false) }} onClick={() => {
                navigate(`/mail/${mail.id}`)
                onReadMail()
            }}>
            <span className="mail-from">
                <Star mail={mail} setMails={setMails} />
                {mail.from}
            </span>
            <span className="mail-subject">{mail.subject}</span>
            <span className="mail-body">{`- ${mail.body}`}</span>

            <span className="mail-time">
                {isOverPreview && <RemoveBtn mail={mail} setMails={setMails} />}
                {isOverPreview && <ReadBtn mail={mail} onToggleMailRead={onToggleMailRead} />}
                {!isOverPreview && utilService.formatDate(mail.sentAt)}
            </span>

        </li>
    )
}