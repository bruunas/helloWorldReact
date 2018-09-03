import React, {Component} from 'react';
import firebase from 'firebase';
import './FormContact.sass';
import '../../database.js';
import Button from '../../components/Buttons/Button';

function addData(data) {
    var newPostKey = firebase.database().ref().child('atendimentos').push().key;
    var updates = {};
    updates['/atendimentos/' + newPostKey] = data;
    return firebase.database().ref().update(updates);
}

class FormContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if( !fields["message"] ){
            formIsValid = false;
            errors["message"] = "É importante que o detalhe do atendimento seja informado!"
        }

        if( !fields["mode"] ){
            formIsValid = false;
            errors["mode"] = "Selecione uma opção"
        }

        if( !fields["state"] ){
            formIsValid = false;
            errors["state"] = "Selecione uma opção"
        }

        if( !fields["cause"] ){
            formIsValid = false;
            errors["cause"] = "Selecione uma opção"
        }


        this.setState({errors: errors});

        return formIsValid;
        
    }
    

    formSubmit(e) {
        e.preventDefault();

        if( this.handleValidation()){
            
            console.log(this.state.fields);
            
            addData(this.state.fields);
            
            alert("Fomulário enviado com sucesso!")
        }

    };

    handleChange(field, e){    		
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        
        this.setState({fields});
    }
    
    render() {
        const { isHide, handleClick } = this.props;
        
        return (
            <div className={["modal", "modal--contact","form-contact ", isHide === false ? 'modal-is-visible' : ''].join(' ')}>
                <form className="form" onSubmit={this.formSubmit.bind(this)}> 
                    <Button state="close-form" handleClick={handleClick}/>

                    <h2 className="form__title">Registrar novo atendimento</h2>

                    <fieldset className="form__wrapper form__wrapper--col">
                        <label htmlFor="call-mode">Origem do Atendimento</label>
                        <select name="call-mode" id="call-mode" value={this.state.fields["mode"]} onChange={this.handleChange.bind(this, "mode")}>
                            <option value="Origem">Selecione a origem</option>
                            <option value="telefone">Telefone</option>
                            <option value="chat">Chat</option>
                            <option value="email">Email</option>
                            <option value="Outro">Outro</option>
                        </select>
                        <span className="error">{this.state.errors["mode"]}</span>

                        <label htmlFor="state">Estado</label>
                        <select name="call-state" id="call-state" value={this.state.fields["state"]} onChange={this.handleChange.bind(this, "state")}>
                            <option value="estado">Selecione o Estado</option>
                            <option value="ac">Acre</option>
                            <option value="al">Alagoas</option>
                            <option value="am">Amazonas</option>
                            <option value="ap">Amapá</option>
                            <option value="ba">Bahia</option>
                            <option value="ce">Ceará</option>
                            <option value="df">Distrito Federal</option>
                            <option value="es">Espírito Santo</option>
                            <option value="go">Goiás</option>
                            <option value="ma">Maranhão</option>
                            <option value="mt">Mato Grosso</option>
                            <option value="ms">Mato Grosso do Sul</option>
                            <option value="mg">Minas Gerais</option>
                            <option value="pa">Pará</option>
                            <option value="pb">Paraíba</option>
                            <option value="pr">Paraná</option>
                            <option value="pe">Pernambuco</option>
                            <option value="pi">Piauí</option>
                            <option value="rj">Rio de Janeiro</option>
                            <option value="rn">Rio Grande do Norte</option>
                            <option value="ro">Rondônia</option>
                            <option value="rs">Rio Grande do Sul</option>
                            <option value="rr">Roraima</option>
                            <option value="sc">Santa Catarina</option>
                            <option value="se">Sergipe</option>
                            <option value="sp">São Paulo</option>
                            <option value="to">Tocantins</option>
                        </select>
                        <span className="error">{this.state.errors["state"]}</span>

                        <label htmlFor="call-cause">Motivo do Chamado</label>
                        <select name="call-cause" id="call-cause" value={this.state.fields["cause"]} onChange={this.handleChange.bind(this, "cause")} >
                            <option value="Origem">Selecione o motivo</option>
                            <option value="duvidas">Dúvidas</option>
                            <option value="elogios">Elogios</option>
                            <option value="sugestoes">Sugestões</option>
                            <option value="outros">Outros</option>
                        </select>
                        <span className="error">{this.state.errors["cause"]}</span>
                    </fieldset>

                    <fieldset className="form__wrapper form__wrapper--col">
                        <h3 className="form__wrapper-title">Detalhes do Atendimento</h3>
                        <textarea ref="message" name="call-message" value={this.state.fields["message"]} onChange={this.handleChange.bind(this, "message")}></textarea>
                        <span className="error">{this.state.errors["message"]}</span>
                    </fieldset>

                    <Button state="sucess" label="Enviar" id="submit" value="Submit" />
                    
                </form>
            </div>
        )
    }
}

export default FormContact;