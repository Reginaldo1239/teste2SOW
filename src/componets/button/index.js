import React from 'react';
import { Button } from 'semantic-ui-react'

export default function (props){
    return(
       <Button 
       onClick={()=>props.onClick()}
       content={props.content}
       color={props.color ? props.color: 'instagram'}/>
    )
} 