const { Fragment } = React

export function MailPreview({ mail }) {
    return (
        <Fragment>
            <span className="mail-from">{mail.from}</span>
            <span className="mail-subject">{mail.subject}</span>

        </Fragment>
    )
}