import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand ml-3" href="/">Diplomint</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end px-3" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/demo-info" className="nav-link">Demo Info</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mint" className="nav-link">Mint Diploma</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">Search Diplomas</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
