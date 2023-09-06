import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React
const { useParams, useNavigate, Outlet, useLocation } = ReactRouterDOM

export function MailDetails() {
    const [mail, setMail] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        mailService.get(params.mailId)
            .then(setMail)
    }, [])

    function renderMailHeader() {
        // return ()
    }

    return (
        <h1>Mail details</h1>
    )
}