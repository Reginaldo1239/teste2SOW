import React,{useState} from 'react';
import { Button, Checkbox, Form,Input } from 'semantic-ui-react'
import Style from './formLogin.module.css';

export default  function FormLogin(props){
    return (
        <div className={Style.container}>
         <Form>
                <Form.Field
                id='formInputControlEmail'
                control={Input}
                label='email'
                >
                 </Form.Field>
                    <Form.Field
                        id='formInputControlPassword'
                        control={Input}
                        label='senha'>
           
                    </Form.Field>
                  
                    <Button type='submit'>entrar</Button>
             </Form>
        </div>
    )
}