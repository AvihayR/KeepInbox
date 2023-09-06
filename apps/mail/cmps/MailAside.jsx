const { useEffect } = React

export function MailAside({ mails, setCompose }) {

    function renderUnreadCount() {
        if (!mails || !mails.length) return ''
        else {
            const unreadMails = mails.filter(mail => !mail.isRead)
            return <span>{unreadMails.length}</span>
        }
    }

    return (
        <aside>
            <button onClick={() => { setCompose(isCompose => !isCompose) }}>Compose</button>
            <ul>
                <li>Inbox {renderUnreadCount()}</li>
                <li>Sent</li>
                <li>Drafts</li>
            </ul>
        </aside>
    )
}