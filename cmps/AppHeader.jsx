const { Link, NavLink, useLocation } = ReactRouterDOM

export function AppHeader() {
    const { pathname } = useLocation()

    if (pathname === '/') return
    return (<header className="app-header">
        <Link to="/">
            <h2 className="logo"> <span className="keep">Keep</span><span className="in">In</span><span className="box">box</span></h2>
        </Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>)
}
