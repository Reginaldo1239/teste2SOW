import React from 'react';
import Header from '../../componets/header';
import Footer from '../../componets/footer';
import FormEmploye from '../../containers/formEmploye';
export default function NewORUpdateUser(){
    return (
        <div>
            <Header></Header>
            <FormEmploye></FormEmploye>
            <Footer></Footer>
        </div>
    )
}