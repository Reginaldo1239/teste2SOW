import React from  'react';
import Header from '../../componets/header';
import List from './main'
import Footer from '../../componets/footer';
import Style from './index.module.css';
import Center from '../../componets/center';

export default function ListEmployees(props){
  
 


    return (
        <div className={Style.listEmployees}>
            <Header></Header>
            <Center>
            <div className={Style.container}>
            <List
         
            ></List>
            </div>
            </Center>
            <Footer></Footer>
        </div>
    )
}