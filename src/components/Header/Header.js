import React, { Component } from 'react';
import './Header.sass';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1 className="Header__title">{ ( this.props.Title  === undefined ? 'Sac React' : this.props.Title ) } </h1>
            </div>
        );
    }
}

export default Header;