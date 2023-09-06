import { NoteFilter } from "../apps/note/cmps/NoteFilter.jsx"

const { Link, NavLink, useLocation } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <h2> Keep<span className="color-header">Inbox</span><i className="fa-solid fa-envelopes-bulk"></i></h2>
        </Link>

        <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/mail">Mail</NavLink>
                <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
