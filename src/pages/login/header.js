import React from 'react';
import Style from './header.module.css';
import Logo from '../../componets/logo';
import Center from '../../componets/center';
export default function Header(props){
    return(
        <header className={Style.header}>
           <Center>
                <Logo></Logo>
            </Center>
        </header>
    )     
}