import { mailService } from "../services/mail.service.js"
const { Fragment, useState } = React

export function MailCompose({ setCompose }) {
    const [mailToCompose, composeMail] = useState({})

    function handleChange({ target }) {
        const field = target.name
        const value = target.value

        composeMail(prevMailToEdit => ({ ...prevMailToEdit, [field]: value }))
    }

    function onSendMail(ev) {
        ev.preventDefault()
        mailService.createMail(mailToCompose)
            .then(console.log)
            .catch(err => console.log('Error: ', err))
    }

    function closeCompose() {
        setCompose(false)
    }

    function renderComposeHeader() {
        return (
            <div className="controls flex space-between align-start">
                <span className="new-msg">New Message</span>
                <button className="close" onClick={closeCompose}>X</button>
            </div>
        )
    }

    function renderComposeAddressSubject() {
        return (
            <Fragment>
                <input className="recipients" type="email" name="to" placeholder="Recipients" />
                <input className="subject" type="text" name="subject" placeholder="Subject" />
            </Fragment>

        )
    }

    function renderComposeFooterControls() {
        return (
            <div className="lower-controls">
                <button className="send">Send</button>
                <button className="trash">Delete</button>
            </div>
        )
    }

    return (
        <form action="" className="compose-mail" onSubmit={onSendMail} onChange={handleChange}>
            {renderComposeHeader()}
            {renderComposeAddressSubject()}
            <textarea className="msg-body" name="body" rows="4" cols="40" placeholder="Enter text...">
            </textarea>
            {renderComposeFooterControls()}
        </form>
    )
}