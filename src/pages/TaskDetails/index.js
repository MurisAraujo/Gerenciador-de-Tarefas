import React, { useState } from 'react';
import { Container, NavBar, RouterArear } from './styles';
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TaskInfo from './pages/TaskInfo';
import TaskComments from './pages/TaskComments';
import TaskVinculation from './pages/TaskVinculation';
import TaskCheckList from './pages/TaskCheckList';
import TaskAssets from './pages/TaskAssets';

import leave from '../../assets/leave.svg';
import msg from '../../assets/msg.svg';

function TaskDetails() {

  const {id} = useParams();
  const [chat, setChat] = useState(false);

  const Routes = () =>{
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/task/:id/detail' exact component = {() => <TaskInfo id = {id}/>}/>
          <Route path='/task/:id/vinc' exact component = {() => <TaskVinculation id = {id}/>}/>
          <Route path='/task/:id/check' exact component = {() => <TaskCheckList id = {id}/>}/>
          <Route path='/task/:id/assets' exact component = {() => <TaskAssets id = {id}/>}/>
        </Switch>
      </BrowserRouter>
    )
  }
  return (
    
    <Container>
      
      <NavBar>
        <NavLink to="/task" style={{position: 'absolute', left: 10, width: 30, top:10}}> 
          <img src={leave} alt="sair"/>
        </NavLink>
        <NavLink to = {`/task/${id}/detail`}>
          <h3>Informações</h3>
        </NavLink>
        <NavLink to = {`/task/${id}/vinc`}>
          <h3>Vincular Usuarios</h3>
        </NavLink>
        <NavLink to = {`/task/${id}/check`}>
          <h3>CheckList</h3>
        </NavLink>
        <NavLink to = {`/task/${id}/assets`}>
          <h3>Anexos</h3>
        </NavLink>
          <button onClick={() => setChat(!chat)} style={{position: 'absolute', right: 10, width: 30, top:10, background: 'none', border: 'none', cursor: 'pointer'}}>
            <img src={msg} alt="toggle" />
          </button>
      </NavBar>
      
      <RouterArear>
        <TaskComments state = {chat} id = {id}/>
        <Routes/>
      </RouterArear>
    </Container>
  );
}

export default TaskDetails;