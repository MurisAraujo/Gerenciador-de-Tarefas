import React, { useState, useEffect } from 'react';
import { Container, TitleChat, MsgArea, InputArea, Comment, Submit } from './styles';
import api from '../../../../services/api';

function TaskComments(props) {

  const [comments, setComments] = useState([]);
  const [description, setDescription] = useState('');
  const [update, setUpdate] = useState(false);

  async function loadComments() {
    await api.post('/tasks/getComments', {
      'id': parseInt(props.id)
    }, {
      headers: {
        "Authorization": localStorage.getItem('Authorization')
      }
    }).then(response => {
      setComments(response.data)
    }).catch((erro) => {
      console.log(erro);
    })
  }

  async function sendComment() {
    document.getElementById('comment').value = '';
    await api.post('/tasks/createComment', {
      'description': description,
      'task_id': parseInt(props.id)
    }, {
      headers: {
        "Authorization": localStorage.getItem('Authorization')
      }
    })
    setUpdate(!update)
  }

  async function deletComment(id) {
    if (window.confirm("Excluir Tarefa?")) {
      const response = await api.post('/deleteComment', {
        'id': id,
        'task_id': parseInt(props.id)
      }, {
        headers: {
          "Authorization": localStorage.getItem('Authorization')
        }
      })
      window.alert(response.data.message)
      setUpdate(!update)
    }
  }

  useEffect(() => {
    loadComments();
    // eslint-disable-next-line
  }, [props.state]);

  useEffect(() => {
    loadComments();
    // eslint-disable-next-line
  }, [update]);


  return (
    <Container state={props.state}>
      <TitleChat state={props.state}>Comentarios</TitleChat>
      <MsgArea state={props.state}>
        {comments.map(comment => (
          <Comment key = {comment.id} onClick={ () => deletComment(comment.id)}>
            <h1>{comment.user_name}</h1>
            <h2>{comment.description}</h2>
            <h3>{comment.date}</h3>
          </Comment>
        ))}
      </MsgArea>
      <InputArea state={props.state}>
        <input id="comment" type="text" onChange={event => setDescription(event.target.value)} />
        <Submit onClick={() => sendComment()}>Enviar</Submit>
      </InputArea>
    </Container>
  );
}

export default TaskComments;