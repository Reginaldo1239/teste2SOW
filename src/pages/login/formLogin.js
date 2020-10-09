import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import { Button, Checkbox, Form,Input,Message } from 'semantic-ui-react'


import {checkCredentials} from '../../auth';
import Style from './formLogin.module.css';

export default  function FormLogin(props){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [messageError,setMessageError]=useState(false);
    let history = useHistory();

    const submit=()=>{
        if(checkCredentials(email,password)){
            setMessageError(false);
            history.push("/");


        }else{
            setMessageError(true);
        }
    }

    return (
        <div className={Style.container}>
         <Form 
         error={messageError}
         >
                <Form.Field
                id='formInputControlEmail'
                control={Input}
                label='email'
                value={email}
                onChange={(event)=>setEmail(event.currentTarget.value)}
                >
                 </Form.Field>
                    <Form.Field
                        id='formInputControlPassword'
                        control={Input}
                        type='password'
                        label='senha'
                        value={password}
                        onChange={(event)=>setPassword(event.currentTarget.value)}>
                    </Form.Field>
                    <Button type='submit' onClick={()=>submit()} >entrar</Button>
                    <Message
                        error
                        header='erro'
                        content="email ou senha invalida"
                        />
             </Form>
        </div>
    )
}