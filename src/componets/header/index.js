import React,{useEffect,useState,createRef} from 'react';
import Logo from '../logo';
import Center from '../center';
import Style from './header.module.css';
import {
    BrowserRouter as Router,
    Link,
    useLocation,
    useHistory
  
  } from "react-router-dom";
export default function Header(props){
    const location = useLocation();
    let history = useHistory();

     const users= React.createRef();
     const newUser = React.createRef();
    useEffect(()=>{
        users.current.style.textDecoration='none'
        newUser.current.style.textDecoration='none'
        if(location.pathname==='/'){
            users.current.style.textDecoration='underline'
        }else{
            newUser.current.style.textDecoration='underline'
        }
    },[location.pathname]);
    const  exit=()=>{
        localStorage.removeItem('token');
        history.push('/login')

    }
    return (
        <header className={Style.header}>
            <Center>
                <div className={Style.container}>
                <div className={Style.box}>
                     <Logo></Logo>
                </div>
                <div className={Style.box}>
                    <nav>
                        <ul>
                            <li className={Style.li}> <Link  to='/' ref={users}>usuarios</Link></li>
                            <li className={Style.li}><Link to='/user' ref={newUser}>novo usuario</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={Style.box}>
                     <span onClick={()=>exit()} className={Style.span} >sair</span>
                </div>
                </div>
            </Center>
        </header>
    )
}