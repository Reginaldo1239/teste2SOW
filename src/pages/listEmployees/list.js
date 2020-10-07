import React from 'react';
import Style from './list.module.css';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import Row from './row'
export default function List(props){
    let {users,loading} = props;

  
    return (
        <div className={Style.list}>

            <Dimmer 
            active={loading}
             inverted>
            <Loader inverted>Loading</Loader>
            </Dimmer>
            {users.map((user,index)=>
           <Row 
           key={index}
           deletar ={(id)=>props.deletar(id)}
           update = {(id)=>props.update(id)}
           user={user}
           index={index}></Row>
            )}
        
        
        </div>
        
    )
}