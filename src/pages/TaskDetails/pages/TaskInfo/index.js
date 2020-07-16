import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../../../services/api';
import { InfoContainer, Divisor, Container, DescContainer, Button } from './styles';

function TaskInfo({ id }) {

  const [task, setTask] = useState({});
  const [desc, setDesc] = useState('');
  const history = useHistory();
  const admin = localStorage.getItem('permission');


  async function loadTask() {
    await api.post('/tasks/getOneTask', {
      'task_id': parseInt(id),
      'administrator': parseInt(admin)
    }, {
      headers: {
        "Authorization": localStorage.getItem('Authorization')
      }
    }).then(response => {
      setTask(response.data[0]);
      setDesc(response.data[0].full_description);
    }).catch((erro) => {
      console.log(erro);
    })
  };

  async function deleteTask() {
    if (window.confirm("Excluir Tarefa?")) {
      await api.post('/tasks/remove', {
        'task_id': parseInt(id)
      }, {
        headers: {
          "Authorization": localStorage.getItem('Authorization')
        }
      }).then(response => {
        history.push('/task')
        window.location.reload();
      }).catch((erro) => {
        console.log(erro)
        window.alert("Só o criador da tarefa pode excluila")
      })

    }
  };

  async function changeDescription() {
    let description = prompt("Digite a nova descrição.");
    if (description !== null) {
      await api.put('/tasks/updateDescription', {
        'id': id,
        'full_description': description
      }, {
        headers: {
          "Authorization": localStorage.getItem('Authorization')
        }
      }).then(response => {
        if (response.status === 203) {
          window.alert("Somente o dono da tarefa pode mudar a descrição");
          return
        }
        setDesc(description);
      });
    }else{
      window.alert('A descrição não pode ser vazia.');
    }


  };

  function isLogged() {
		const teste = localStorage.getItem('Authorization');
		if (teste == null) {
			history.push('/');
		}
	}
  useEffect(() => {
    isLogged();
    loadTask();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>

      <InfoContainer>
        <div>
          <h3>Titulo</h3>
          <p>{task.description}</p>
        </div>
        <div>
          <h3>Prioridade</h3>
          {task.priority === 0 ? <p style={{ color: '#5FA130' }}>Baixa prioridade</p> : null}
          {task.priority === 1 ? <p style={{ color: '#FFC301' }}>Alta prioridade</p> : null}
          {task.priority === 2 ? <p style={{ color: '#DF2020' }}>Prioridade Critica</p> : null}
        </div>
        <div>
          <h3>Data Inicial</h3>
          <p> {task.initial_date} </p>
        </div>
        <div>
          <h3>Data Final</h3>
          <p> {task.final_date} </p>
        </div>
        <div>
          <h3>Departamento</h3>
          <p> {task.departament} </p>
        </div>
        <div>
          <h3>Progresso</h3>
          <p> {task.percent}% Completo</p>
        </div>
        <div>
          <Button delete onClick={() => deleteTask()}>
            Excluir
          </Button>
        </div>
        <div>
          <Button onClick={() => changeDescription()}>
            Alterar Descrição
          </Button>
        </div>
      </InfoContainer>
      <Divisor />
      <DescContainer>
        <h2>Descrição</h2>
        <p>{desc}</p>
      </DescContainer>
    </Container>
  )
}

export default TaskInfo;