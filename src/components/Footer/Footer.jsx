import { Link } from "react-router-dom";

import React from 'react';
import './Footer.scss';

const Footer = () => (
    <div className="Footer">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/communicate">Communicate</Link>
            <Link to="/record">Record</Link>
            <Link to="/settings" className="smallLink">⚙️</Link>
        </nav>
    </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;