import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" data-toggle="tab">Home</Link>
                    </li>

                    <li className="nav-item">
                    <Link to="/newdog/" className="nav-link" data-toggle="tab">New Woof!</Link>
                    </li>

                    <li className="nav-item">
                    <Link to="/dogs/" className="nav-link" data-toggle="tab">Dog Community</Link>
                  </li>
                </ul>
            </div>
        );
    }
}

export default Header;
