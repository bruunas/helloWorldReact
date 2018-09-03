import React, { Component } from 'react';
import './Home.sass';
import Header from '../../components/Header/Header';
import Buttons from '../../components/Buttons/Button';
import FormContact from '../../components/FormContact/FormContact';

class Home extends Component {
	constructor(props) {
        super(props);

        this.state = {isModalOpen: true}  
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
		console.log(e)
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen 
        }));
    }
	
	render() {
		return (
			<div className="Home">
				<Header />

				<div className="container Home__actions">
					<Buttons label="Registrar Atendimento" state="sucess" handleClick={this.handleClick} />
					<a href="/atendimentos" className="btn-link">Visualizar Registros</a>
				</div>

				<FormContact isHide={this.state.isModalOpen} handleClick={this.handleClick}/>
			</div>
		);
	}
}

export default Home;
