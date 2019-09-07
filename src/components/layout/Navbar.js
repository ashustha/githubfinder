import React from 'react';
import PropTypes from 'prop-types'


const Navbar = ({icon,title}) => {

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link" href="#"><i className={icon} />{title}</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


Navbar.defaultProps = {
    title : 'Github Finder',
    icon : 'fa fa-github mr-1'
}


Navbar.porpTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
}

export default Navbar
