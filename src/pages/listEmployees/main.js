import React,{useState,useEffect} from 'react';
import Style from './main.module.css';
import { Dimmer, Loader } from 'semantic-ui-react'
import {get,del} from '../../api/server';
import Pagination from '../../componets/pagination';
import Search from '../../componets/search';
import Row from './row'
export default function Main(props){
  //  let {users,loading} = props;
    const [users,setUsers] = useState([]);
    const [page,setPage]=useState(1);
    const [totalItens,setTotalItens]=useState(0);
    const [loadingUsers,setLoadingUsers]= useState(false);
    const limit =15;
    useEffect(()=>{
        getUsers();
      
       
    },[page]);

    const getUsers = ()=>{
        setLoadingUsers(true)
        get(`usuarios?_page=${page}&_limit=${limit}&_sort=id&_order=desc`).then((res)=>{  
            if(res.status===200){
                setUsers(res.data);
                setTotalItens(res.headers.map['x-total-count']);
                setLoadingUsers(false)      
                return res.data
            }
        });
    }
    const deleteUser = (id)=>{
        setLoadingUsers(true)
        del(`usuarios/${id}`).then((res)=>{
            console.log(id)
            console.log(res)
            if(res.status===200){
                getUsers();
            }else{
                setLoadingUsers(false);
            }
        })
    }
    const searchUser = (value)=>{
        setLoadingUsers(true)
        get(`usuarios?name_like=${value}`).then((res)=>{
           if(res.status===200){
               setLoadingUsers(false);
               setUsers(res.data);
                if(res.data.length<=limit){
                    setTotalItens(0);
                }
           }else{
            setLoadingUsers(false);
           }
        })
      
        }
    return (
    <div className={Style.container}>
            <Search
            search={(value)=>searchUser(value)}
            ></Search>
         <div className={Style.list}>
                        <Dimmer 
                        active={loadingUsers}
                        inverted>
                        <Loader      active={loadingUsers}>Loading</Loader>
                        </Dimmer>
                {users.map((user,index)=>
                <Row 
                key={user.id}
                deletar ={(id)=>deleteUser(id)}
                user={user}
                index={index}>
                </Row>
                    )}
             </div>
            <div className={Style.pagination}>
                    <Pagination
                        activePage={page}
                        totalOfPages={  Math.ceil(totalItens/limit)}
                        onPageChange={(page)=>setPage(page)}>
                    </Pagination>
            </div>
     </div>
        
    )
}