const { useState } = React;
import { MailPreview } from "./MailPreview.jsx";

export function MailList({ mails, setMails }) {
    return (
        <ul className="mail-list">
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}
        </ul>
    )
}
