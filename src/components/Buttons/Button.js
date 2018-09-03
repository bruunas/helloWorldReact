import React, { Component } from 'react';
import './Button.sass';

class Button extends Component {
    
    render(){
        const typeElem = this.props.type

        if( typeElem === 'link'){
            
            return <a href={ this.props.Link } className={`btn btn-${this.props.state} `} onClick={ this.props.handleClick }>{this.props.label}</a>
        }

        return <button className={`btn btn-${this.props.state} `} onClick={ this.props.handleClick }>{this.props.label}</button>
    }
}

export default Button;