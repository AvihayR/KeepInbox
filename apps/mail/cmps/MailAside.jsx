const { useEffect } = React

export function MailAside({ mails, setCompose }) {

    function renderUnreadCount() {
        if (!mails || !mails.length) return ''
        else {
            const unreadMails = mails.filter(mail => !mail.isRead)
            return <span className="unread-indicator">{unreadMails.length}</span>
        }
    }

    return (
        <aside>
            <button className="compose" title="Compose a new message" onClick={() => { setCompose(isCompose => !isCompose) }}>Compose</button>
            <ul>
                <li title="Go to your inbox">Inbox {renderUnreadCount()}</li>
                <li title="Go to sent mails">Sent</li>
                <li title="Go to drafts folder">Drafts</li>
                <li title="Go to trash folder">Trash</li>
            </ul>
        </aside>
    )
}