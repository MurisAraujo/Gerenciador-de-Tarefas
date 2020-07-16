import React, { useState, useEffect } from 'react';
import {login} from '../../services/auth';
import {useHistory} from 'react-router-dom'

import { Container, ImgSection, LoginSection, LoginForm, LoginInput, LoginButton } from './styles';
import api from '../../services/api';

function Login() {

	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	function isLogged() {
		if (localStorage.getItem('Authorization') == null) {
			console.log('vazio');
			return;
		}
		else{
			history.push('/task')
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const response = await api.post('/signin', {
				"user": user,
				"password": password
			});
			console.log(response.data);
			if (response.status === 200) {
				login("bearer " + response.data.token);
				localStorage.setItem('permission', JSON.stringify(response.data.permission[0].administrator));
				localStorage.setItem('name', response.data.name[0].name);
				history.push('/task');
			}
		} catch (error) {	
			console.log(error);
			window.alert("Acesso não autorizado, usuario ou senha incorretos por favor tentar novamente.");
		}
	}
	
	useEffect(() => {
		isLogged()
		// eslint-disable-next-line
	}, []);

	return (
		<Container>
			<ImgSection />
			<LoginSection>
				<LoginForm>
					<form onSubmit={handleSubmit} >
						<h1>LOGIN</h1>
						<LoginInput type="text" name="User" placeholder="Usuario" onChange={e => setUser(e.target.value)} autoComplete="off" required/>
						<LoginInput type="password" name="Password" placeholder="Senha" onChange={e => setPassword(e.target.value)} required/>
						<LoginButton type="submit" name="Login" value="Logar" />
					</form>
				</LoginForm>
			</LoginSection>
		</Container>
	);
}

export default Login;