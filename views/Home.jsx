const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function Home() {

    const colors = [
        '#d62d20',
        '#0b57d0',
        '#008744',
        '#ffa700',
        '#0b57d0'
    ]

    const sentences = [
        'All your needs in one place',
        'Capture ideas, make to-do lists',
        'Stay organized',
        'Your trusted email platform',
        'Access your email from anywhere'
    ]
    const [currentSentence, setCurrentSentence] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSentence((prevSentence) => (prevSentence + 1) % sentences.length)
        }, 3000)

        return () => clearTimeout(timer)
    }, [currentSentence, sentences])

    return (
        <section className="home">
            <div className="center">
                <div className="logo-container">
                    <img src="./assets/img/logo.png" alt="Logo" className="logo" />
                </div>
                <div className="text-container">
                    <div className="typing-animation" style={{ color: colors[currentSentence] }}>
                        {sentences[currentSentence]}
                    </div>
                </div>
                <div className="home-buttons-container">
                    <Link to="/mail" className="gmail-button">Mail</Link>
                    <Link to="/note" className="keep-button">Notes</Link>
                </div>
            </div>
        </section>
    )
}
