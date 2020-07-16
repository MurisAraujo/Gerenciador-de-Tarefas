import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../../services/api';
import { Container, CheckListArea, Divisor, CheckedListArea, Item, Button, Submit } from './styles';

function TaskCheckList({ id }) {

  const [checklist, setChecklist] = useState([]);
  const [description, setDescription] = useState('');
  const [update, setUpdate] = useState(false);
  const history = useHistory();

  async function sendTask() {
    await api.post('/tasks/newTaskChecklist', {
      'description': description,
      'task_id': parseInt(id)
    }, {
      headers: {
        "Authorization": localStorage.getItem('Authorization')
      }
    })
    setUpdate(!update);
  }

  async function loadCheckList() {
    await api.post('/tasks/taskChecklist', {
      'id': parseInt(id)
    }, {
      headers: {
        "Authorization": localStorage.getItem('Authorization')
      }
    }).then(response => {
      setChecklist(response.data)
    }).catch((erro) => {
      console.log(erro)
    })
  }

  async function deleteChecklist(id) {
    await api.post('/tasks/DeleteChecklist', {
      'task_id': parseInt(id)
    }, {
      headers: {
        "Authorization": localStorage.getItem('Authorization')
      }
    })
    setUpdate(!update);
  }

  async function handletoggle(itemId, state) {
    await api.post('/tasks/toggleTaskChecklist', {
      'id': itemId,
      'task_id': parseInt(id),
      'check': state
    }, {
      headers: {
        "Authorization": localStorage.getItem('Authorization')
      }
    })
    setUpdate(!update);
  }

  function isLogged() {
		const teste = localStorage.getItem('Authorization');
		if (teste == null) {
			history.push('/');
		}
  }
  
  useEffect(() => { 
    isLogged();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadCheckList()
    // eslint-disable-next-line
  }, [update]);


  return (
    <Container>
      <CheckListArea>
        <h2>CheckList</h2>
        <div>
          <input placeholder="Digite o item do a ser adicionado" onChange={event => setDescription(event.target.value)} />
          <Submit onClick={() => sendTask()}>Salvar</Submit>
        </div>
        {checklist.map(item => (
          <React.Fragment key={item.id}>
            {item.check === false ? <Item ><Button onClick={()=>handletoggle(item.id, item.check)}>Trocar</Button><h3>{item.description}</h3><Button onClick={() => deleteChecklist(item.id)}>Excluir</Button></Item> : null}
          </React.Fragment>
        ))}
      </CheckListArea>
      <Divisor />
      <CheckedListArea>
        <h2>Itens Finalizados</h2>
        {checklist.map(item => (
          <React.Fragment key={item.id}>
            {item.check === true ? <Item ><Button onClick={()=>handletoggle(item.id, item.check)}>Trocar</Button><h3>{item.description}</h3><Button onClick={() => deleteChecklist(item.id)}>Excluir</Button></Item> : null}
          </React.Fragment>
        ))}
      </CheckedListArea>
    </Container>
  );
}

export default TaskCheckList;