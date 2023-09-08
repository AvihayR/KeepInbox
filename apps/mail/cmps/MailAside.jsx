
const { useEffect } = React

export function MailAside({ mails, setCompose, onSetFilterBy }) {

    function renderUnreadCount() {
        if (!mails || !mails.length) return ''
        else {
            const unreadMails = mails.filter(mail => !mail.isRead)
            return <span className="unread-indicator">{unreadMails.length}</span>
        }
    }

    function handleChange({ target }) {
        const field = target.dataset.name
        let value = target.dataset.value

        onSetFilterBy(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    return (
        <aside>
            <button className="compose" title="Compose a new message" onClick={() => { setCompose(isCompose => !isCompose) }}>Compose</button>
            <ul>
                <li data-name='status' data-value='inbox' title="Go to your inbox" onClick={handleChange}>Inbox {renderUnreadCount()}</li>
                <li data-name='status' data-value='sent' title="Go to sent mails" onClick={handleChange}>Sent</li>
                <li data-name='status' data-value='starred' title="View starred mails" onClick={handleChange}>Starred</li>
                <li title="Go to drafts folder">Drafts</li>
                <li title="Go to trash folder">Trash</li>
            </ul>
        </aside>

    )
}