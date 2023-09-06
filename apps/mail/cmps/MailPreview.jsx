const { Fragment } = React
const { useNavigate, useParams } = ReactRouterDOM

export function MailPreview({ mail }) {
    const navigate = useNavigate()

    return (
        <li className="mail-preview-container" onClick={() => { navigate(`/mail/${mail.id}`) }}>
            <span className="mail-from">{mail.from}</span>
            <span className="mail-subject">{mail.subject}</span>
        </li>
    )
}