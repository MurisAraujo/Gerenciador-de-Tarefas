import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TaskDetails from './pages/TaskDetails';
import AddTask from './pages/AddTask';

// import { Container } from './styles';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/task" exact component={Dashboard} />
                <Route path="/task/:id" component={TaskDetails}/>
                <Route path="/add" component={AddTask}/>
            </Switch>
        </Router>
    );
}

export default Routes;