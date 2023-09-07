import { mailService } from "../services/mail.service.js"

export function DynamicButton({ cmpType, cb }) {

    function decideButton() {
        switch (cmpType) {
            case 'remove':
                return <button className="google-btn remove" title="Remove this mail" onClick={cb}></button>
        }
    }

    return (
        decideButton()
    )

}