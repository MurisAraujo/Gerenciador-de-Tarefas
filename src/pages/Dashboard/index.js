import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Container, Header, NewTaskBtn, NewTaskDiv, LogOutDiv, LogOutBtn, UserName, ContainerTask, TaskArea, Divisor, TaskTitle, TaskDiv } from './styles';
import { ModalContainer, Filter, BtnArea, FilterBtn } from './modalStyles'
import TaskCard from './components/TaskCard';
import TaskList from './components/TaskList';
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

	const [filter, setFilter] = useState(false);
	const [dept, setDept] = useState([]);

	let deptName = null;
	let display = 0;
	let view = parseInt(localStorage.getItem('display'));


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
		if (state === 1 && percent !== 100) {
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

	async function loadDept() {
		await api.get('/tasks/selectDepartament', {
			headers: {
				"Authorization": localStorage.getItem('Authorization')
			}
		}).then(response => {
			setDept(response.data)
		})
	}

	async function handleFilter() {
		if (deptName !== null) {
			let doing = doingTask.filter(function (task) {
				return task.departament === deptName;
			})
			let todo = toDoTask.filter(function (task) {
				return task.departament === deptName;
			})
			let done = doneTask.filter(function (task) {
				return task.departament === deptName;
			})
			setToDoTask(todo);
			setDoingTask(doing);
			setDoneTask(done);
			setFilter(!filter);
		} else {
			localStorage.setItem('display', display);
			setFilter(!filter);
		}

	}

	async function handleCancelFilter() {
		setUpdate(!update);
		setFilter(!filter);
	}

	useEffect(() => {
		isLogged();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		toDoTaskLoad();
		doingTaskLoad();
		doneTaskLoad();
		loadDept();
		// eslint-disable-next-line
	}, [update]);

	const FilterModal = () => {
		return (
			<ModalContainer value={filter} >
				<Filter>
					<h2>Filtro</h2>
					<select onChange={event => deptName = event.target.value}>
						<option >Selecione um Departamento</option>
						{dept.map(departament => (
							<option key={departament.key} value={departament.label}>{departament.label}</option>
						))}
					</select>
					<select onChange={event => display = event.target.value}>
						<option>Selecione um modo de exebição</option>
						<option value={0}>Cards</option>
						<option value={1}>Lista</option>
					</select>
					<BtnArea>
						<FilterBtn isFilter={false} onClick={() => handleCancelFilter()} >Cancelar/Tirar</FilterBtn>
						<FilterBtn isFilter={true} onClick={() => handleFilter()}>Filtrar</FilterBtn>
					</BtnArea>

				</Filter>
			</ModalContainer>
		)
	}

	return (
		<Container>
			<FilterModal />
			<Header>
				<NewTaskDiv>
					<Link to="/add" style={{ height: '50px', alignSelf: 'center' }}>
						<NewTaskBtn>Nova Tarefa</NewTaskBtn>
					</Link>
					<NewTaskBtn onClick={() => setFilter(!filter)}>Filtro</NewTaskBtn>
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
							<>
								{view === 1 ? <TaskList value={task} key={task.id} /> : <TaskCard value={task} key={task.id} />}
							</>
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
							<>
								{view === 1 ? <TaskList value={task} key={task.id} /> : <TaskCard value={task} key={task.id} />}
							</>
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
							<>
								{view === 1 ? <TaskList value={task} key={task.id} /> : <TaskCard value={task} key={task.id} />}
							</>
						))}
					</TaskDiv>
				</TaskArea>
			</ContainerTask>
		</Container>
	);


}

export default Dashboard;