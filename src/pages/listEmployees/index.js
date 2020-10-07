import React from  'react';
import Header from '../../componets/header';
import List from './list'
import Footer from '../../componets/footer';
import Style from './index.module.css';
import Center from '../../componets/center';
import FormEmploye from './formEmploye';
export default function ListEmployees(props){
    return (
        <div className={Style.listEmployees}>
          
            <Header></Header>
            <Center>
            <div className={Style.container}>
              <FormEmploye></FormEmploye>       
            <List></List>
            </div>
            </Center>
  
            <Footer></Footer>
        </div>
    )
}