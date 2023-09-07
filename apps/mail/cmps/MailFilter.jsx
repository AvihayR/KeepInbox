const { useState } = React

export function MailFilter({ filterBy, onSetFilterBy }) {

    const [isModalOpen, setModalOpen] = useState(false)

    function toggleModal() {
        setModalOpen(prevModalState => !prevModalState)
    }

    function renderDropDown() {
        return (
            <ul className="filter-dropdown">
                <option data-name='isRead' value='' onClick={handleChange}>All</option>
                <option data-name='isRead' value="read" onClick={handleChange}>Read</option>
                <option data-name='isRead' value='unread' onClick={handleChange}>Unread</option>
            </ul>
        )
    }

    function handleChange({ target }) {
        const field = target.dataset.name
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
        <div className="filter-container flex">
            <input className="filter-by-text" type="text" data-name='txt' placeholder="Search mail" title="Search a mail via text" onChange={handleChange} />
            <button className="filter-by-read google-btn" onClick={toggleModal}>
                {isModalOpen && renderDropDown()}
            </button>
        </div>
    )

}