
const { useState } = React

export function MailAside({ mails, setCompose, onSetFilterBy }) {
    const [isOverAside, setIsOverAside] = useState(false)

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
        <aside
            onMouseOver={() => { setIsOverAside(true) }}
            onMouseLeave={() => { setIsOverAside(false) }}
        >
            <button className="compose" title="Compose a new message" onClick={() => { setCompose(isCompose => !isCompose) }}>
                {isOverAside && 'Compose'}
            </button>
            <ul>
                <li data-name='status' data-value='inbox' title="Go to your inbox" onClick={handleChange}>
                    <span className="inbox-logo"></span>
                    {isOverAside && <span>Inbox</span>}
                    {renderUnreadCount()}
                </li>
                <li data-name='status' data-value='sent' title="Go to sent mails" onClick={handleChange}>
                    <span className="sent-logo"></span>
                    {isOverAside && <span>Sent</span>}
                </li>
                <li data-name='status' data-value='starred' title="View starred mails" onClick={handleChange}>
                    <span className="starred-logo"></span>
                    {isOverAside && <span>Starred</span>}
                </li>
                <li title="Go to drafts folder">
                    <span className="drafts-logo"></span>
                    {isOverAside && <span>Drafts</span>}
                </li>
                <li title="Go to trash folder">
                    <span className="trash-logo"></span>
                    {isOverAside && <span>Trash</span>}
                </li>
            </ul>
        </aside>

    )
}