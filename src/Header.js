import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div>
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <Link to="/" class="nav-link" data-toggle="tab">Home</Link>
                    </li>

                    <li class="nav-item">
                    <Link to="/newdog/" class="nav-link" data-toggle="tab">New Woof!</Link>
                    </li>

                    <li class="nav-item">
                    <Link to="/dogs/" class="nav-link" data-toggle="tab">Dog Community</Link>
                  </li>
                </ul>
            </div>
        );
    }
}

export default Header;
