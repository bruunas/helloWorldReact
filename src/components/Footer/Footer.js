import React, { Component } from 'react';
import './Footer.sass';

class Footer extends Component {
    render(){
        return(
            <footer className="footer"> 
                <div className="container">
                    <p className="footer__copyright">Feito com amor por { this.props.developer } {`<3`}</p>
                </div>
            </footer>
        );
    }
}

export default Footer 