const { useEffect } = React

export function MailAside({ mails }) {

    function renderUnreadCount() {
        if (!mails || !mails.length) return ''
        else {
            const unreadMails = mails.filter(mail => !mail.isRead)
            return <span>{unreadMails.length}</span>
        }
    }

    return (
        <aside>
            <button>Compose</button>
            <ul>
                <li>Inbox {renderUnreadCount()}</li>
                <li>Sent</li>
                <li>Drafts</li>
            </ul>
        </aside>
    )
}