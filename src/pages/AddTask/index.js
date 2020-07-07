import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { Container, Form, DateInput, Input, Button, BackBtn } from './styles';

function AddTask() {

	const [taskTitle, setTaskTitle] = useState('');
	const [initial_date, setInitial_date] = useState();
	const [final_date, setFinalDate] = useState();
	const [priorityTask, setPriorityTask] = useState('')
	const [shop_id, setShop_id] = useState('');
	const [dept_id, setDept_id] = useState('');
	const [taskDescri, setTaskDescri] = useState('');
	const [dept, setDept] = useState([]);

	async function handleSubmit() {
		try {
			const response = await api.post('/tasks', {
				'description': taskTitle,
				'initial_date': initial_date,
				'final_date': final_date,
				'department_id': parseInt(dept_id),
				'shop_id': parseInt(shop_id),
				'full_description': taskDescri,
				'priority': parseInt(priorityTask),
			}, {
				headers: {
					"Authorization": localStorage.getItem('Authorization')
				}
			})
			// eslint-disable-next-line
			console.log(response);
			if (response.status === 200) {
				window.alert("Tarefa inserida com sucesso, você pode adicionar outra ou voltar a tela de tarefas clicando no botão Voltar")
			}
		} catch (error) {
			window.alert("Preencha todos os campos", error)
		}
	}

	async function loadDept() {
		await api.get('/tasks/selectDepartament', {
			headers: {
				"Authorization": localStorage.getItem('Authorization')
			}
		}).then(response => {
			setDept(response.data)
		})
	}

	useEffect(() => {
		loadDept();
	}, [])

	return (
		<Container>
			<Link to='/task'>
				<BackBtn>
					Voltar
				</BackBtn>
			</Link>
			<Form >
				<h3>Titulo</h3>
				<Input type="text" onChange={event => setTaskTitle(event.target.value)} />
				<div style={{ width: '43%', height: '15%', margin: '5px 10px' }}>
					<h3>Data Inicial</h3>
					<DateInput type="date" name="initial-date" onChange={event => setInitial_date(event.target.value)} />
				</div>
				<div style={{ width: '43%', height: '15%', margin: '5px 10px' }}>
					<h3>Data Final</h3>
					<DateInput type="date" name="final-date" onChange={event => setFinalDate(event.target.value)} />
				</div>
				<h3>Descrição da Tarefa</h3>
				<textarea name="descriptionTask" cols="50" rows="5" onChange={event => setTaskDescri(event.target.value)} />
				<div style={{ width: '30%', height: '10%', margin: '5px 10px' }}>
					<h3>Loja</h3>
					<select name="shop" onChange={event => setShop_id(event.target.value)}>
						<option >Selecione uma Loja</option>
						<option value='1'>PegPese - Interlagos</option>
						<option value='2'>PegPese - Taboão</option>
						<option value='3'>PegPese - Morumbi</option>
						<option value='7'>PegPese - Bolonha</option>
					</select>
				</div>
				<div style={{ width: '30%', height: '10%', margin: '5px 10px' }}>
					<h3>Departamento</h3>
					<select name="departament" onChange={event => setDept_id(event.target.value)}>
						<option >Selecione um Departamento</option>
						{dept.map(departament => (
							<option key={departament.key} value={departament.key}>{departament.label}</option>
						))}
					</select>
				</div>
				<div style={{ width: '30%', height: '10%', margin: '5px 10px' }}>
					<h3>Prioridade</h3>
					<select name="priority" onChange={event => setPriorityTask(event.target.value)}>
						<option>Selecione uma Prioridade</option>
						<option value="0">Baixa Prioridade</option>
						<option value="1">Alta Prioridade</option>
						<option value="2">Prioridade Crítica</option>
					</select>
				</div>
				<Button onClick={() => handleSubmit()}>Enviar</Button>
			</Form>
		</Container>
	);
}

export default AddTask;