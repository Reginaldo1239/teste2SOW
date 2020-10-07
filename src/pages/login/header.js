import React from 'react';
import Style from './header.module.css';
import Logo from '../../componets/logo'
export default function Header(props){
    return(
        <header className={Style.header}>
            <div className="center">
                     <Logo></Logo>
            </div>
        </header>
    )     
}