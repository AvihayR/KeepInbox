const { useEffect, useRef } = React

export function ColorPickerModal({ isOpen, onClose, onSelectColor, position }) {
    const colors = ['#faafa8', '#fff8b8', '#e2f6d3', '#b4ddd3', '#aeccdc', '#d3bfdb']
    const modalRef = useRef(null)

    function handleCloseModal() {
        onClose()
    }

    useEffect(() => {

        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseModal()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    if (!isOpen) return null

    function handleColorSelect(color) {
        onSelectColor(color)
        onClose()
    }

    const modalStyle = {
        position: 'absolute',
        top: position.y + 'px',
        left: position.x + 'px',
    }

    return (
        <div className="color-picker-modal" style={modalStyle} ref={modalRef}>
            <div className="color-options">
                {colors.map(color => (
                    <div
                        key={color}
                        className="color-option"
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorSelect(color)}
                    ></div>
                ))}
            </div>
            <button onClick={onClose}><i className="fa-regular fa-circle-xmark fa-lg"></i></button>
        </div>
    )
}