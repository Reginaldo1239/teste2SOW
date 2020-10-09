import React, { useState,useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Style from './formEmploye.module.css';
import { Button, Header, Image, Modal,Form ,Input,Message} from 'semantic-ui-react'
import {getAdress} from '../../api/adressApi';
import {minLength,emailValid,numberValid, cepValid,validFormatCpf} from '../../util/validation';
import {post, put} from '../../api/server';

export default function FormEmploye(props){
    let {infoUserToUpdate} = props;

    const [name,setName] = useState('');
    const [cpf,setCpf] = useState('');
    const [email,setEmail] = useState('');
    const [cep,setCep] = useState('');
    const [street,setStreet] = useState('');
    const [number,setNumber] = useState('');
    const [neighborhood,setNeighborhood] = useState('');
    const [city,setCity]=useState('');

    const [nameError,setNameError] = useState(false);
    const [cpfError,setCpfError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [cepError,setCepError] = useState(false);
    const [streetError,setStreetError]= useState(false);
    const [numberError,setNumberError] = useState(false);
    const [neighborhoodError,setNeighborhoodError] = useState(false);
    const [cityError,setCityError] = useState(false);

    const [submitedForm,setSubmitedForm] = useState(false);
    const inputIsEmpty = 'o campo está vázio';
    let { userId } = useParams();

    useEffect(()=>{
            let formatCep = cep.replace('-','');
            if(formatCep.length===8){
            getAdress(formatCep).then((res)=>{
                console.log(res)
                if(res.status===200 && !res.data.erro ){
                    fillAdress(res.data);
                    setCepError(false);
                }else{
                    setCepError('cep invalido');
                }
            });
        }
    },[cep]);

    const submitForm = async()=>{
        console.log('validForm()' )
        console.log(await validForm())
        if(validForm()){
            setSubmitedForm(true);
            let body = {
                name,
                cpf,
                email,
                cep,
                street,
                number,
                neighborhood,
                city
            };

            // verifica se o props infoUserToUpdate === false se for defirente é para atualizar as informações do usuário
    if(userId){
        body.id = infoUserToUpdate.id;
        put(`usuarios/${body.id}`,body).then((res)=>{
            if(res.status===200){
            }
        })
     
        }else{
            body.id = Date.now();
            let resultInsert = await  post('usuarios',body);
               if(resultInsert.status===201){
               
               }
        }
      
        }
        setName('');
        setCpf('');
        setEmail('');
        setCpf('');
        setCep('');
        setStreet('');
        setNumber('');
        setNeighborhood('');
        setCity('');
    }

    const validForm = ()=>{
        let inputName,inputCpf,inputEmail,inputCep,inputStreet,inputNumber,inputNeighborhood,inputCity;
        inputName = validateName(name);
        inputCpf = validateCpf(cpf);
        inputEmail= validateEmail(email);
        inputCep = validateCep(cep);
        inputStreet= validateStreet(street)
        inputNumber = validateNumber(number);
        inputNeighborhood = validateNeighborhood(neighborhood);
        inputCity = validateCity(city);
    
    return inputName && inputCpf && inputEmail && inputCep && inputStreet && inputNumber && inputNeighborhood && inputCity;
    }


    const handleName = (event)=>{
        let name = event.currentTarget.value;
        setName(name);
        validateName(name);
    };
  
    const handleCpf = (event)=>{
        let cpf = event.currentTarget.value;
        if(event.nativeEvent.inputType=='deleteContentBackward'){
             setCpf(cpf);
         }
         if(validFormatCpf(cpf)){
            setCpf(cpf.replace(/^(\d{3})(\d{3})(\d{3})$/g,"$1.$2.$3-"));
         }
         validateCpf(cpf);
    }
  
    const handleEmail =(event)=>{
        let email = event.currentTarget.value;
        setEmail(email);
        validateEmail(email);
    }
 
    const handleCep =(event)=>{
        let  cep = event.currentTarget.value;
        if(event.nativeEvent.inputType=='deleteContentBackward'){
            setCep(cep);
        }else if(cepValid(cep)){
          setCep(cep.replace(/^(\d{5})(\d{0,3})$/,"$1-"));
        }
        validateCep(cep);
    }

    const handleStreet = (event)=>{
        let street = event.currentTarget.value;
        setStreet(street);
        validateStreet(street);
    }

    const handleNumber = (event) =>{
        let number = event.currentTarget.value;
         if(numberValid(number)){
             setNumber(number);
             validateNumber(number);
           }
    }
    const handleNeighborhood = (event)=>{
        let neighborhood = event.currentTarget.value;
        setNeighborhood(neighborhood);
        validateNeighborhood(neighborhood);
    }
 
    const handleCity = (event)=>{
        let city = event.currentTarget.value;
        setCity(city);
        validateCity(city);
    }
 

    
    const fillAdress  =(adress)=>{
        let {logradouro,bairro,localidade} = adress;
        setStreet(logradouro);
        setNeighborhood(bairro);
        setCity(localidade);
        validateStreet(logradouro);
        validateNeighborhood(bairro);
        validateCity(localidade);
    }
    const validateName=(name)=>{
        if(!minLength(name,1)){
                setNameError(inputIsEmpty);
                return false;
        }else{
            setNameError(false);
            return true;
        }
        }
        const validateCpf = (cpf)=>{
            if(!minLength(cpf,1)){
                setCpfError(inputIsEmpty);
                return false;
            }else{
                setCpfError(false);
                return true;
            }
        }
        const validateEmail = (email)=>{
            if(!minLength(email,1)){
                setEmailError(inputIsEmpty);
                return false;
            }else if(!emailValid(email)){
                setEmailError('email invalido');
                return false;
            }else{
                setEmailError(false);
                return true;
            }
        }
    
        const validateCep = (cep)=>{
            if(!minLength(cep,1)){
                setCepError(inputIsEmpty);
                return false;
            }else{
                setCepError(false)
                return true;
            }
        }
        const validateStreet = (street)=>{
            if(!minLength(street,1)){
                setStreetError(inputIsEmpty);
                return false;
            }else {
                setStreetError(false);
                return true;
            }
        }
        const validateNumber = (number)=>{
            if( !minLength(number,1)){
                setNumberError(inputIsEmpty);
                return false;
            }else {
                setNumberError(false);
                return true;
            }
        }
        const validateNeighborhood = (neighborhood)=>{
           // !minLength(neighborhood,1)?setNeighborhoodError(inputIsEmpty):setNeighborhoodError(false);
            if( !minLength(neighborhood,1)){
                setNeighborhoodError(inputIsEmpty);
                return false;
            }else{
                setNeighborhoodError(false);
                return true;
            }
        }
        const validateCity = (city)=>{
            if( ! minLength(city,1)){
                setCityError(inputIsEmpty)
                return false;
            }else{
                setCityError(false)
                return true;
            }
        }
    return(
     
        <div className={Style.container}>
          <Form
          loading={submitedForm}
          >
                <header className={Style.header}>
                    <h2>novo usuário</h2>
                </header>
                <Form.Group widths='equal'>
                        <Form.Input 
                        value={name}
                        onChange={async(event)=>{ handleName(event)}}
                        fluid 
                        label='nome'
                        error={nameError}
                        />
                        <Form.Input
                        value={cpf}
                        onChange={(event)=>handleCpf(event)}
                        fluid 
                        label='cpf'
                        error={cpfError}
                        />
                 </Form.Group>
                         <Form.Input 
                         value={email}
                         onChange={(event)=>handleEmail(event)}
                         fluid label='email'
                         error={emailError} 
                         />
                        <Form.Input 
                        className={Style.inputCep}
                        value={cep }
                        onChange={(event)=>handleCep(event)}
                        fluid 
                        label='cep'
                        error={cepError}
                        />
                 <Form.Group >
                        <Form.Input  
                        className={Style.inputStreet} 
                        value={street}
                        onChange={(event)=>handleStreet(event)}
                        fluid 
                        label='rua'
                        error={streetError} />
                        <Form.Input  
                        className={Style.inputNumber} 
                        value={number}
                        onChange={(event)=>handleNumber(event)}
                        fluid 
                        label='nº'
                        error={numberError} />
                 </Form.Group >
                 <Form.Group >
                        <Form.Input  
                        className={Style.inputNeighborhood}
                        value={neighborhood}
                        onChange={(event)=>handleNeighborhood(event)}
                        fluid 
                        label='bairro'
                        error={neighborhoodError} />
                        <Form.Input  
                        className={Style.inputCity} 
                        value={city}
                        onChange={(event)=>handleCity(event)}
                        fluid 
                        label='cidade'
                        error={cityError} />
                 </Form.Group >
                 <Button
                 onClick={()=>submitForm()}
                 >salvar</Button>
 
        </Form>
          </div>
   
    )
}