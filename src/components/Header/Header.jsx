import React from 'react';
import { useLocation } from 'react-router-dom';
//import PropTypes from 'prop-types';
import './Header.scss';

function Header() {
    const { pathname } = useLocation();

    return (
        <div className="Header">
            <img src="./images/purple-border-large.png" className="header-logo" alt="Hear Here logo" />
            <h1>{pathname == '/' ? "Home" : null}</h1>
            <h1>{pathname == '/communicate' ? "Communicate" : null}</h1>
            <h1>{pathname == '/record' ? "Record" : null}</h1>
            <h1>{pathname == '/settings' ? "Settings" : null}</h1>
        </div>
    )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
