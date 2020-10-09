import React from "react";
import {
    BrowserRouter as Router, 
    Switch,
    Route,
  } from "react-router-dom";
import Login from '../pages/login';
import ListEmployyes from '../pages/listEmployees';
import NewUser from '../pages/newEmploye';
import EditEmploye from '../pages/editEmploye';
import RoutersPrivate from './routersPrivate';


export default  function Routers (){
    return (
        <Router>
            <Switch>  
            <Route   path={'/login'} component={Login} />
                <RoutersPrivate>
                    <Route exact path={'/'}  component={ListEmployyes} />
                    <Route   path={'/user/:userId'} component={EditEmploye}  />
                    <Route exact  path={'/user'}  component={NewUser}/>
                </RoutersPrivate>
            </Switch>
        </Router> 
    )
}