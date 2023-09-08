import { mailService } from "../services/mail.service.js"
export function Star({ mail, setMails }) {

    function toggleStarEmail(ev) {
        ev.stopPropagation()

        mail.isStarred = !mail.isStarred
        mailService.save(mail)
            .then(setMails(prevMails => {
                const mailIdx = prevMails.findIndex(prevMail => prevMail.id === mail.id)
                prevMails.splice(mailIdx, 1, mail)
                return [...prevMails]
            }))
    }

    return (
        <button className={`google-btn star ${mail.isStarred ? 'starred' : ''}`} onClick={toggleStarEmail}></button>
    )
}