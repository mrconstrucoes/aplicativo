import React from 'react';
import MenuSocial from './subcomponents/MenuSociais';
import { FaTimes } from 'react-icons/fa';

class Contatos extends React.Component {
	constructor(props){
		super(props);

		this.state = { nomeContatos: '', emailContatos: '', telefoneContatos: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(evento){
		let nome = evento.target.name;
		let valor = evento.target.value;

		this.setState({ [nome] : valor });

		console.log("State: "+JSON.stringify(this.state));
	}
	handleSubmit(evento){
		console.log("Depoimentos: "+JSON.stringify(this.state));
		evento.preventDefault();

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(this.state)
		};

		fetch("https://apimrconstrucoes.herokuapp.com/contatos", requestOptions)
			.then((response) => response.json())
			.then((data) => { alert("Salvo com sucesso!") });

		document.querySelector("#modalSucesso").classList.toggle("display-none");
		document.querySelector("#formulario").reset();
		this.setState({nomeContatos: '', emailContatos: '', telefoneContatos: ''});

		
	}
	handleClick(e){
		if(e == "abrir"){
				document.querySelector("#modalSucesso").classList.toggle("display-none");
		}
		else if(e == "fechar"){
				document.querySelector("#modalSucesso").classList.toggle("display-none");
		}
	}
	render(){
		return 	<section className="padding-16  ">

					<h2 className="text-center">
						Contatos
					</h2>

			<div className="modal display-none" id="modalSucesso">
				<div className="card padding-16 margin-16 green">
					<h3 className="text-center">Sucesso</h3>
					<p className="text-justify text-center">Seus dados foram salvos com sucesso!</p>
				</div>

				<button className="btn raisin-black btn-close" id="btnClose" onClick={() => this.handleClick("fechar")}>
					<FaTimes id="btnClose" />
				</button>
			</div>

          <div className="card padding-10 margin-5 light-gray">
							<h3 className="text-center">Redes Sociais</h3>

              <p className="text-justify text-indent">Para entrar em contato conosco, veja nossas redes sociais, ou preencha o formulário para entrarmos em contato.</p>

              <MenuSocial />
          </div>

					<form className="padding-5" id="formulario" onSubmit={this.handleSubmit}>
						<div className="card padding-5 light-gray">
							<h3 className="text-center padding-10">
								Entrar em contato:
							</h3>

							<label htmlFor="nome">Nome:</label>
							<input value={this.state.nomeContatos.value} onChange={this.handleChange}  type="text" id="nomeContatos" name="nomeContatos" placeholder="Digite seu nome completo" className="input white border-bottom-blue-twitter-focus" />


 							<label htmlFor="email">Email:</label>
 							<input value={this.state.emailContatos.value} onChange={this.handleChange}  type="email" id="emailContatos" name="emailContatos" placeholder="Digite seu email" className="input white  border-bottom-blue-twitter-focus" />

 							<label htmlFor="telefone">Telefone:</label>
 							<input value={this.state.telefoneContatos.value}  onChange={this.handleChange}  type="tel" id="telefoneContatos" name="telefoneContatos" placeholder="Digite o seu telefone" className="input white border-bottom-blue-twitter-focus" />

 							<br/>
 							<input type="submit" value="Salvar" className="btn btn-block eggplant" />
 						</div>
					</form>
				</section>;
	}
}

export default Contatos;
