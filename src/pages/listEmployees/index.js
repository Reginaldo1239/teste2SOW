import React, { useEffect, useState } from  'react';
import Header from '../../componets/header';
import List from './list'
import Footer from '../../componets/footer';
import Style from './index.module.css';
import Center from '../../componets/center';
import FormEmploye from './formEmploye';
import Pagination from '../../componets/pagination';
import {get,del} from '../../api/server';
export default function ListEmployees(props){
    const [users,setUsers] = useState([]);
    const [page,setPage]=useState(0);
    const [totalItens,setTotalItens]=useState(0);
    const [infoUserToUpdate,setInfoUserToUpdate]=useState(false);
    const [loadingUsers,setLoadingUsers]= useState(false);
    const limit =3;
    useEffect(()=>{
        getUsers();
    },[page])
    const getUsers = ()=>{
        setLoadingUsers(true)
        get(`usuarios?_page=${page}&_limit=${limit}&_sort=id&_order=desc`).then((res)=>{  
            if(res.status===200){
                setUsers(res.data);
                setTotalItens(res.headers.map['x-total-count']);
                setLoadingUsers(false)      
            }
        });
    }
    const deleteUser = (id)=>{
        del(`usuarios/${id}`).then((res)=>{
            console.log(res)
        })
    }
    const newInsert =()=>{
        setPage(0);
        getUsers();
    }
    const updateUser = (body)=>{
        let vetorUsers =users;
        users.map((user,index)=>{
                if(user.id===body.id){
                    vetorUsers[index] = body;
                }
        });
        setUsers([]);
        setUsers(vetorUsers);
    }
    return (
        <div className={Style.listEmployees}>
            <Header></Header>
            <Center>
            <div className={Style.container}>
              <FormEmploye 
              infoUserToUpdate={infoUserToUpdate}
              newInsert={(body)=>newInsert()}
              userUpdated={(body)=>updateUser(body)}
              ></FormEmploye>       
            <List
            deletar={(id)=>deleteUser(id)}
            update={(infoUser)=>setInfoUserToUpdate(infoUser)}
            users={users}
            loading={loadingUsers}
            ></List>
            <Pagination
            activePage={page+1}
            totalOfPages={  Math.round(totalItens/limit)}
            onPageChange={(page)=>setPage(page)}
            ></Pagination>
            </div>
            </Center>
            <Footer></Footer>
        </div>
    )
}