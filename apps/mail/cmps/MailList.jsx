import { MailPreview } from "./MailPreview.jsx";
const { useState } = React;

export function MailList({ mails, setMails }) {
    return (
        <ul className="mail-list">
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} setMails={setMails} />)}
        </ul>
    )
}
