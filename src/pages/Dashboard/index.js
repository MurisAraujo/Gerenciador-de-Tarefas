import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Container, Header, NewTaskBtn, NewTaskDiv, LogOutDiv, LogOutBtn, UserName, ContainerTask, TaskArea, Divisor, TaskTitle, TaskDiv } from './styles';
import TaskCard from './components/TaskCard';
import LogOut from '../../assets/power.svg';
import api from '../../services/api';
import { logout } from '../../services/auth';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../utils/items';


function Dashboard() {

	const history = useHistory();
	const user_name = localStorage.getItem('name');
	const Administrator = parseInt(localStorage.getItem('permission'));
	const [toDoTask, setToDoTask] = useState([]);
	const [doingTask, setDoingTask] = useState([]);
	const [doneTask, setDoneTask] = useState([]);
	const [update, setUpdate] = useState(false);

	// eslint-disable-next-line
	const [{ setDoing }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: (item, monitor) => handleToggle(item.id, item.state, item.percent),
		collect: monitor => ({
			setDoing: !!monitor.isOver()
		})
	})

	// eslint-disable-next-line
	const [{ setDone }, drop2] = useDrop({
		accept: ItemTypes.CARD2,
		drop: (item, monitor) => handleToggle(item.id, item.state, item.percent),
		collect: monitor => ({
			setDone: !!monitor.isOver()
		})
	})

	function isLogged() {
		const teste = localStorage.getItem('Authorization');
		if (teste == null) {
			history.push('/');
		}
	}

	function Logout() {
		logout();
		history.push('/');
	}

	async function toDoTaskLoad() {
		await api.post('/getTask', {
			"Administrator": Administrator,
			"state": 0
		}, {
			headers: {
				"Authorization": localStorage.getItem('Authorization')
			}
		}).then(response => {
			setToDoTask(response.data);
		}).catch((erro) => {
			console.log(erro);
		});
	}

	async function doingTaskLoad() {
		await api.post('/getTask', {
			"Administrator": Administrator,
			"state": 1
		}, {
			headers: {
				"Authorization": localStorage.getItem('Authorization')
			}
		}).then(response => {
			setDoingTask(response.data);
		}).catch((erro) => {
			console.log(erro);
		});
	}

	async function doneTaskLoad() {
		await api.post('/getTask', {
			"Administrator": Administrator,
			"state": 2
		}, {
			headers: {
				"Authorization": localStorage.getItem('Authorization')
			}
		}).then(response => {
			setDoneTask(response.data);
		}).catch((erro) => {
			console.log(erro);
		});
	}

	async function handleToggle(id, state, percent) {
		if(state === 1 && percent !== 100){
			window.alert('A tarefa só pode ser finalizada quando estiver 100% completa.');
			return;
		}
		if (state === 2) {
			state = state - 1;
		} else {
			state = state + 1;
		}
		// eslint-disable-next-line
		const response = await api.post('/kanban/toggle', {
			'id': id,
			'state': state,
		}, {
			headers: {
				"Authorization": localStorage.getItem('Authorization')
			}
		});
		setUpdate(!update);
	}


	useEffect(() => {
		isLogged();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		toDoTaskLoad();
		doingTaskLoad();
		doneTaskLoad();
		// eslint-disable-next-line
	}, [update]);

	return (
		<Container>
			<Header>
				<NewTaskDiv>
					<Link to="/add" style={{ height: '50px', alignSelf: 'center' }}>
						<NewTaskBtn>Nova Tarefa</NewTaskBtn>
					</Link>
				</NewTaskDiv>
				<LogOutDiv>
					<UserName>Bem Vindo, {user_name}</UserName>
					<LogOutBtn onClick={() => Logout()}><img src={LogOut} alt="logout" /></LogOutBtn>
				</LogOutDiv>
			</Header>
			<ContainerTask>
				<TaskArea>
					<TaskTitle>
						A FAZER
					</TaskTitle>
					<TaskDiv>
						{toDoTask.map(task => (
							<TaskCard value={task} key={task.id} />
						))}
					</TaskDiv>
				</TaskArea>
				<Divisor />
				<TaskArea ref={drop} >
					<TaskTitle>
						FAZENDO
					</TaskTitle>
					<TaskDiv >
						{doingTask.map(task => (
							<TaskCard value={task} key={task.id} />
						))}
					</TaskDiv>
				</TaskArea>
				<Divisor />
				<TaskArea ref={drop2}>
					<TaskTitle>
						FEITO
					</TaskTitle>
					<TaskDiv>
						{doneTask.map(task => (
							<TaskCard value={task} key={task.id} />
						))}
					</TaskDiv>
				</TaskArea>
			</ContainerTask>
		</Container>
	);
}

export default Dashboard;