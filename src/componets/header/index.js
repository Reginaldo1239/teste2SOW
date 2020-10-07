import React from 'react';
import Logo from '../logo';
import Style from './header.module.css';
export default function Header(props){
    return (
        <header className={Style.header}>
            <div className={Style.center}>
                <div className={Style.box}>
                     <Logo></Logo>
                </div>
                <div className={Style.box}>
                     <span className={Style.span} >sair</span>
                </div>
            </div>
        </header>
    )
}