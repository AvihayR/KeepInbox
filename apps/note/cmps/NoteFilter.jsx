const { useState, useEffect } = React

export function NoteFilter({ filterBy, onSetFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])


    function handleChange({ target }) {
        const field = target.name
        let value = target.value


        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break
            case 'checkbox':
                value = target.checked
                break
            default:
                break
        }

        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilterBy(setFilterByToEdit)
    }

    const { txt, type } = filterByToEdit

    return (
        <section className="note-filter">
            <form onSubmit={onSubmitFilter} className="search-container">
                <div className="search-bar">
                    <input value={txt}  className="search-input" type="text" onChange={handleChange} name="txt" placeholder="Search notes..." />
                </div>

                <div className="filter-buttons">
                    <label className={`filter-button ${type === '' ? 'active' : ''}`}>
                        <input
                            type="radio"
                            name="type"
                            value=""
                            checked={type === ''}
                            onChange={handleChange}
                        />
                        <i className="fa-solid fa-border-all"></i>
                    </label>
                    <label className={`filter-button notetxt ${type === 'NoteTxt' ? 'active' : ''}`}>
                        <input
                            type="radio"
                            name="type"
                            value="NoteTxt"
                            checked={type === 'NoteTxt'}
                            onChange={handleChange}
                        />
                        <i className="fa-solid fa-note-sticky"></i>
                    </label>
                    <label className={`filter-button noteImg ${type === 'NoteImg' ? 'active' : ''}`}>
                        <input
                            type="radio"
                            name="type"
                            value="NoteImg"
                            checked={type === 'NoteImg'}
                            onChange={handleChange}
                        />
                        <i className="fa-solid fa-image"></i>
                    </label>
                    <label className={`filter-button noteTodos ${type === 'NoteTodos' ? 'active' : ''}`}>
                        <input
                            type="radio"
                            name="type"
                            value="NoteTodos"
                            checked={type === 'NoteTodos'}
                            onChange={handleChange}
                        />
                        <i className="fa-solid fa-square-check"></i>
                    </label>
                </div>

            </form>
        </section>
    )

}