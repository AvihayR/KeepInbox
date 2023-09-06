import { MailPreview } from "./MailPreview.jsx";

export function MailList({ mails }) {
    return (
        <ul className="mail-list">
            {mails.map(mail => <li className="mail-preview-container" key={mail.id}><MailPreview mail={mail} /></li>)}
        </ul>
    )
}
