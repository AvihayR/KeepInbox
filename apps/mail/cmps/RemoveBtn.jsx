import { mailService } from "../services/mail.service.js"
const { useNavigate } = ReactRouterDOM

export function RemoveBtn({ mail, setMails, goBack = false }) {
    const navigate = useNavigate()

    function removeMail(ev) {
        ev.stopPropagation()
        mailService.remove(mail.id)
            .then(setMails && setMails(prevMails => prevMails.filter(prevMail => prevMail !== mail)))
            .then(goBack && navigate('/mail'))
    }

    return (
        <button className="google-btn remove" title="Remove this mail" onClick={removeMail}></button>
    )

}