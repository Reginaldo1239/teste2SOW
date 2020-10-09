import React,{useState} from 'react';
import { Input } from 'semantic-ui-react'

import Style from './search.module.css';
export default function Search(props){
    const [search,setSearch]= useState('')
    const onClickIcon =()=>{
        props.search(search);
    }
    return (
        <div className={Style.container}>
            <Input
                className={Style.input}
                onChange={(event)=>setSearch(event.currentTarget.value)}
                icon={{ name: 'search', circular: true, link: true ,onClick:onClickIcon }}
                placeholder='buscar'
            />
        </div>
    )
}