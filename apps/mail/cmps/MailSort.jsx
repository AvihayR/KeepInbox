const { useState } = React

export function MailSort({ setSortBy }) {

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        setSortBy(prevSort => ({ ...prevSort, [field]: value }))
    }

    return (
        <section className="sort-container">
            <select name="subject" onChange={handleChange}>
                <option value="">Subject</option>
                <option value="descending">A-Z</option>
                <option value="ascending">Z-A</option>
            </select>

            <select name="sentAt" onChange={handleChange}>
                <option value="">Date</option>
                <option value="descending">Newest</option>
                <option value="ascending">Oldest</option>
            </select>
        </section>
    )

}