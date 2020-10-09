import { nanoid } from 'nanoid'

export const checkCredentials=(email,password)=>{
    const emailDefault='ete@gmail.com';
    const passwordDefault = '123456';
    if(emailDefault===email&&passwordDefault===password){
        localStorage.setItem('token', nanoid());
        return true
    }
    return false;
}

export const authUser =()=>{
   return localStorage.getItem('token')!=null;
}