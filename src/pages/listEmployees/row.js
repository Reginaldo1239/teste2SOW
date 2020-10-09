import React from 'react';
import { useHistory } from "react-router-dom";

import { Button } from 'semantic-ui-react'
import Style from './row.module.css';
export default function Row (props){
    let {index,user}=props;
    let {name,cpf,email,city}=user;
    let history = useHistory();

    function handleClick(userId) {
        history.push(`/user/${userId}`);
      }
    return(
        index===0?
        <>
        <div className={Style.row}>
        <div className={Style.cell}>nome</div>
        <div className={Style.cell}>cpf</div>
        <div className={Style.cell}>email</div>
        <div className={Style.cell}>cidade</div>
        <div className={Style.cell}>   
</div>
        <div className={Style.cell}>    
</div>
    </div>
    <div className={Style.row}>
    <div className={Style.cell}>{name}</div>
    <div className={Style.cell}>{cpf}</div>
    <div className={Style.cell}>{email}</div>
    <div className={Style.cell}>{city}</div>
    <div className={Style.cell}><Button content='deletar' color='red' onClick={()=>props.deletar(user.id)}  /></div>
    <div className={Style.cell}> <Button content='editar' color='green' onClick={()=>handleClick(user.id)} /></div>
</div>
</>:
    <div className={Style.row}>
        <div className={Style.cell}>{name}</div>
        <div className={Style.cell}>{cpf}</div>
        <div className={Style.cell}>{email}</div>
        <div className={Style.cell}>{city}</div>
        <div className={Style.cell}><Button content='deletar' color='red' onClick={()=>props.deletar(user.id)}  /></div>
        <div className={Style.cell}> <Button content='editar' color='green' onClick={()=>handleClick(user.id)} /></div>
    </div>

    )
}