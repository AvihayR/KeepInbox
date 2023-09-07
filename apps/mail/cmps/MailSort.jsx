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
    }

    return (
        <section className="sort-container">
            <label className="sort-by-name" title={sortBy.subject ? 'Sort by subject - Ascending' : 'Sort by subject - Descending'}>
                Subject
                <input name="subject" type="checkbox" onChange={handleChange} />
            </label>
            <label className="sort-by-date" title={sortBy.sentAt ? 'Sort by date - Oldest' : 'Sort by date - Newest'}>
                Date
                <input defaultChecked={true} name="sentAt" type="checkbox" onChange={handleChange} />
            </label>

        </section>
    )

}