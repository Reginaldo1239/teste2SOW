import React from 'react';
import Style from './list.module.css';
import { Button } from 'semantic-ui-react'

export default function List(props){
    return (
        <div className={Style.list}>
            <div className={Style.employe}>
                <div className={Style.box}>nome</div>
                <div className={Style.box}>cpf</div>
                <div className={Style.box}>email</div>
                <div className={Style.box}>cidade</div>
                <div className={Style.box}>   
</div>
                <div className={Style.box}>    
</div>
            </div>
            <div className={Style.employe}>
                <div className={Style.box}>reginaldo</div>
                <div className={Style.box}>442.500.608.96</div>
                <div className={Style.box}>reginaldo.melo56@gmail.com</div>
                <div className={Style.box}>São Paulo</div>
                <div className={Style.box}><Button content='deletar' color='red'  /></div>
                <div className={Style.box}> <Button content='editar' color='green' /></div>
            </div>
            
        </div>
    )
}