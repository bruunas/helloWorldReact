import React, { Component } from 'react';
import firebase from 'firebase';
import './Register.sass';
import Header from '../../components/Header/Header';
import '../../database.js';


function getSacData() {
	return new Promise((resolve, reject) => {
		firebase
		.database()
		.ref('atendimentos')
		.orderByChild('created_at')
		.limitToLast(100)
		.once('value')
		.then((e) => resolve(e.val())).catch(err => reject(err))        
	})
}

class Register extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			dateNow: new Date(),
			objsHtml: ''	
			
		}
	}
	
	
	componentWillMount(){
		getSacData().then(value => {
			let arr = Object.values(value)
						
			let dateDay,
			dateMonth,
			dateYear;

			
			
			let elems = arr.map( obj => {
				console.log('arr', obj);

				dateDay = new Date( obj.created_at ).getDate();
				dateMonth = new Date( obj.created_at ).getMonth() + 1;
				dateYear = new Date( obj.created_at ).getFullYear()

				const dateInit = `${dateDay.toString().length === 1 ?  '0' + dateDay : dateDay}/${dateMonth.toString().length === 1 ?  '0' + dateMonth : dateMonth}/${dateYear}`
				
				return <tr>

					<td className="Register__date">{ dateInit }</td>
					<td>{obj.mode}</td>
					<td>{obj.state}</td>
					<td>{obj.cause}</td>
					<td>{obj.message}</td>
				</tr>
			} )


			
			this.setState({
				objsHtml: elems
			});

			console.log(this.state.objsHtml);
		})
		
		console.log(this.state.objsHtml);
	}
	
	render() {
		return (
			<div className="Register">
				<Header Title="Atendimentos"/>

				<div className="Register__wrapper">
					<table className="Register__table"> 
						<thead>
							<th>Data</th>
							<th>Origem</th>
							<th>Estado</th> 
							<th>Motivo</th>
							<th>Detalhes do Atendimento</th>
						</thead>
						<tbody>
							{this.state.objsHtml}
						</tbody>
					</table>
				</div>
			
			</div>
		);
	}
}

export default Register;
