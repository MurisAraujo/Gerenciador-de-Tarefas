import React, { useState, useEffect } from "react";
import api from '../../../../services/api';
import plus from '../../../../assets/user-plus.svg';
import times from '../../../../assets/user-x.svg';
import right from '../../../../assets/arrow-right.svg';
import left from '../../../../assets/arrow-left.svg';

import { Container, Divisor, NotVinculatedUsersArea, VinculatedUsersArea, UserCard, Button, PageButton } from './styles';

function TaskVinculation({ id }) {

  const [vincUsers, setVincUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [change, setChange] = useState(false);

  async function loadvincUsers() {

    await api.post('/tasks/nameRelated', {
      'task_id': parseInt(id)
    }, {
      headers: {
        "Authorization": localStorage.getItem('Authorization')
      }
    }).then(response => {
      setVincUsers(response.data);
    }).catch((erro) => {
      console.log(erro);
    })
  }

  async function loadUsers() {
    await api.get(`/getName`, {
      headers: {
        "Authorization": localStorage.getItem('Authorization')
      },
      params: { page }
    }).then(response => {
      setUsers(response.data);
    })
  }


  async function vinculateUser(user_id) {
    await api.post('/tasks/createRelated', {
      'task_id': parseInt(id),
      'user_id': user_id
    }, {
      headers: {
        "Authorization": localStorage.getItem('Authorization')
      }
    })
    setChange(!change)
  }

  async function removeUser(user_id) {
    await api.post('/vinculate/removeUser', {
      'task_id': parseInt(id),
      'user_id': user_id
    }, {
      headers: {
        "Authorization": localStorage.getItem('Authorization')
      }
    })
    setChange(!change)
  }

  useEffect(() => {
    loadvincUsers();
    loadUsers();
    // eslint-disable-next-line
  }, [change]);

  useEffect(() => {
    loadUsers();
    // eslint-disable-next-line
  }, [page]);

  return (
    <Container>
      <VinculatedUsersArea>
        <h2>Usuarios Vinculados</h2>
        {vincUsers.map(vincUser => (
          <UserCard key = {vincUser.id}>
            <h3>
              {vincUser.name}
            </h3>
            <Button onClick={() => removeUser(vincUser.id)}>
              <img src={times} alt="times" />
            </Button>
          </UserCard>
        ))}
      </VinculatedUsersArea>
      <Divisor />
      <NotVinculatedUsersArea>
        <h2>Vincular Usuario</h2>
        {users.map(user => (
          <UserCard key = {user.id}>
            <h3>
              {user.name}
            </h3>
            <Button onClick={() => vinculateUser(user.id)}>
              <img src={plus} alt="plus" />
            </Button>
          </UserCard>
        ))}
        <PageButton onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}> <img src={left} alt="left" /> </PageButton>
        <PageButton right onClick={() => {
          if (page < 2) {
            setPage(page + 1);
          }
        }}> <img src={right} alt="right" /> </PageButton>
      </NotVinculatedUsersArea>
    </Container>
  );
}

export default TaskVinculation;