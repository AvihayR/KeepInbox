export function DynamicButton({ cmpType, mail }) {

    function decideButton() {
        switch (cmpType) {
            case 'remove':
                return <button className="remove" onClick={remove}></button>
        }
    }

    function remove(ev) {
        ev.stopPropagation()
        console.log('remove', mail)
    }

    return (
        decideButton()
    )

}