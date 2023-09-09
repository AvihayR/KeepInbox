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

    function onSetIsOverAside(ev) {
        console.log(ev)
        setIsOverAside(true)
    }

    return (
        <aside
            onMouseOver={onSetIsOverAside}
            onMouseLeave={() => { setIsOverAside(false) }}
        >
            <button className="compose" title="Compose a new message" onClick={() => { setCompose(isCompose => !isCompose) }}>
                {isOverAside && 'Compose'}
            </button>
            <ul>
                <li data-name='status' data-value='inbox' title="Go to your inbox" onClick={handleChange}>
                    <span data-name='status' data-value='inbox' className="inbox-logo"></span>
                    {isOverAside && 'Inbox'}
                    {renderUnreadCount()}
                </li>
                <li data-name='status' data-value='sent' title="Go to sent mails" onClick={handleChange}>
                    <span data-name='status' data-value='sent' className="sent-logo"></span>
                    {isOverAside && 'Sent'}
                </li>
                <li data-name='status' data-value='starred' title="View starred mails" onClick={handleChange}>
                    <span data-name='status' data-value='starred' className="starred-logo"></span>
                    {isOverAside && 'Starred'}
                </li>
                <li title="Go to drafts folder">
                    <span className="drafts-logo"></span>
                    {isOverAside && 'Drafts'}
                </li>
                <li title="Go to trash folder">
                    <span className="trash-logo"></span>
                    {isOverAside && 'Trash'}
                </li>
            </ul>
        </aside>

    )
}