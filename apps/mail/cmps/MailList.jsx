import { MailPreview } from "./MailPreview.jsx";
const { useState } = React;

export function MailList({ mails, setMails }) {
    return (
        <ul className="mail-list">
            {!mails.length && <li className="mail-preview-container">No such emails, try a different option..<span></span></li>}
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} setMails={setMails} />)}
        </ul>
    )
}
