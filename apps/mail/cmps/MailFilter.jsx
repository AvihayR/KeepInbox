export function MailFilter({ filterBy, onSetFilterBy }) {

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;

            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }
        onSetFilterBy(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    return (
        <div className="filter-container">
            <input className="filter-by-text" type="text" name='txt' placeholder="Search mail" onChange={handleChange} />

            <select name="isRead" onChange={handleChange}>
                <option value=''>All</option>
                <option value="read">Read</option>
                <option value='unread'>Unread</option>
            </select>
        </div>
    )

}