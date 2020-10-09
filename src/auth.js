import { nanoid } from 'nanoid'
import {emailValid,minLength} from './util/validation'
export const checkCredentials=(email,password)=>{
    const emailDefault='ete@gmail.com';
    const passwordDefault = '123456';
    if(emailValid(email)&&minLength(password,4)){
        localStorage.setItem('token', nanoid());
        return true
    }
    return false;
}

export const authUser =()=>{
   return localStorage.getItem('token')!=null;
}