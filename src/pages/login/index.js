import React from 'react';
import Header from './header';
import Footer from '../../componets/footer';
import FormLogin from './formLogin';


export default function Login(props){

  
    return (
        <div>
            <Header></Header>
            <FormLogin></FormLogin>
            <Footer></Footer>
        </div>
    );
}