import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="nav-link">Botón 1</button>
                    </li>

                    <li className="nav-item">
                        <button className="nav-link">Botón 3</button>
                    </li>
                </ul>
            </nav>
        );
    };
};

export default Navbar;