const { useState } = React

export function MailSort({ sortBy, setSortBy }) {

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

        setSortBy({ [field]: value })
        console.log(field, value)
        // setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    return (
        <section className="sort-container">
            <label className="sort-by-name">
                Subject:
                <input name="subject" checked={sortBy.subject} type="checkbox" onChange={handleChange} />
            </label>
            <label className="sort-by-date">
                Date:
                <input name="sentAt" checked={sortBy.sentAt} type="checkbox" onChange={handleChange} />
            </label>

        </section>
    )

}