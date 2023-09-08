import { mailService } from "../services/mail.service.js"
const { Fragment, useState } = React

export function MailCompose({ setCompose, setMails }) {
    const [mailToCompose, composeMail] = useState({})

    function handleChange({ target }) {
        const field = target.name
        const value = target.value

        composeMail(prevMailToEdit => ({ ...prevMailToEdit, [field]: value }))
    }

    function onSendMail(ev) {
        ev.preventDefault()
        closeCompose(ev)
        mailService.createMail(mailToCompose)
            // .then(sentMail => setMails(prevMailToEdit => [sentMail, ...prevMailToEdit]))
            .catch(err => console.log('Error: ', err))
    }

    function closeCompose(ev) {
        ev.preventDefault()
        composeMail({})
        setCompose(false)
    }

    function renderComposeHeader() {
        return (
            <div className="controls flex space-between align-start">
                <span className="new-msg">New Message</span>
                <button className="close google-btn x-mark" onClick={closeCompose}></button>
            </div>
        )
    }

    function renderComposeAddressSubject() {
        return (
            <Fragment>
                <input className="recipients" type="email" name="to" placeholder="Recipients" required />
                <input className="subject" type="text" name="subject" placeholder="Subject" required />
            </Fragment>

        )
    }

    function renderComposeFooterControls() {
        return (
            <div className="lower-controls">
                <button className="mail-send">Send</button>
                <button className="google-btn remove trash" onClick={closeCompose}></button>
            </div>
        )
    }

    return (
        <form action="" className="compose-mail" onSubmit={onSendMail} onChange={handleChange}>
            {renderComposeHeader()}
            {renderComposeAddressSubject()}
            <textarea className="msg-body" name="body" rows="4" cols="40" placeholder="Enter text..." required>
            </textarea>
            {renderComposeFooterControls()}
        </form>
    )
}