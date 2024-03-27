import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-main">
            <div className="links">
                <Link className="link-txt" to="/Investment_analysis">Investment Analysis</Link>
                <Link className="link-txt" to="/Property_valuation">Property Valuation</Link>
            </div>
        </div>
    );
}

