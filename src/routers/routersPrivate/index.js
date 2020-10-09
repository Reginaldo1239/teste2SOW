import React,{useEffect} from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect
  } from "react-router-dom";
import {authUser} from '../../auth'
import newEmploye from '../../pages/newEmploye'

export default function RouterPrivate(props){
    let {path,component,children} = props;
    useEffect(()=>{
        console.log(props.path)
        
    })
    return(
        authUser()?( 
            children
            
):(
            <Redirect to="/login" />
          )
    )

}