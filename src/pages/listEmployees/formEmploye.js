import React, { useState,useEffect } from 'react';
import Style from './formEmploye.module.css';
import { Button, Header, Image, Modal,Form ,Input,Message} from 'semantic-ui-react'
import {getAdress} from '../../api/adressApi';
import {minLength,emailValid,numberValid, cepValid} from '../../util/validation';
import {post} from '../../api/server';

export default function FormEmploye(props){
    const [modalVisible,setModalVisible] = useState(false);
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
    const inputIsEmpty = 'o campo está vázio';
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
        if(validForm()){
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
         let resultInsert = await  post('usuarios',body);
         console.log(resultInsert)
        }
    }

    const validForm =()=>{
        clearErrors();
  
        let errors = [];
            if(!minLength(name,1)){
                setNameError(inputIsEmpty);
                errors.push({name:inputIsEmpty})
            }
            if(!minLength(cpf,1)){
                setCpfError(inputIsEmpty);
                errors.push({cpf:inputIsEmpty});

            }
            if(!minLength(email,1)){
                setEmailError(inputIsEmpty);
                errors.push({email:inputIsEmpty})
            }else if(!emailValid(email)){
                setEmailError('email invalido');
                errors.push({email:'o email invalido'});
            }
            if(!minLength(cep,1)){
                setCepError(inputIsEmpty);
                errors.push({cep:inputIsEmpty});
            }
            if(!minLength(street,1)){
                setStreetError(inputIsEmpty);
                errors.push({street:inputIsEmpty});
            }
            if(!minLength(number,1)){
                setNumberError(inputIsEmpty);
                errors.push({number:inputIsEmpty});
            }else if(! /^\d*$/.test(number)){
                setNumberError('o número invalid');
                errors.push({number:'o número invalid'});
            }
            if(!minLength(neighborhood,1)){
                setNeighborhoodError(inputIsEmpty);
                errors.push({neighborhood:inputIsEmpty});
            }
            if(!minLength(city,1)){
                setCityError(inputIsEmpty);
                errors.push({city:inputIsEmpty})
            }
            return errors.length===0;
    }
    const handleName = (event)=>{
        let name = event.currentTarget.value;
        setName(name)
        !minLength(name,1) ? setNameError(inputIsEmpty):setNameError(false);
    };
    const handleCpf = (event)=>{
        let cpf = event.currentTarget.value;
        if(event.nativeEvent.inputType=='deleteContentBackward'){
             setCpf(cpf);
         }
         setCpf(cpf.replace(/^(\d{3})(\d{3})(\d{3})$/g,"$1.$2.$3-"));   
        //validação
        if(!minLength(cpf,1)){
            setCpfError(inputIsEmpty);
        }else{
            setCpfError(false);
        }
    }
    const handleEmail =(event)=>{
        let email = event.currentTarget.value;
        setEmail(email);
        if(!minLength(email,1)){
            setEmailError(inputIsEmpty);
        }else if(!emailValid(email)){
            setEmailError('email invalido');
        }else{
            setEmailError(false);
        }
    }
    const handleCep =(event)=>{
        let  cep = event.currentTarget.value;
        if(event.nativeEvent.inputType=='deleteContentBackward'){
            setCep(cep);
        }else if(cepValid(cep)){
          setCep(cep.replace(/^(\d{5})(\d{0,3})$/,"$1-"));
        }
        //validar cep
        if(!minLength(cep,1)){
            setCepError(inputIsEmpty);
        }else{
            setCepError(false)
        }
    }
    const handleStreet = (event)=>{
        let street = event.currentTarget.value;
        setStreet(street);
        ! minLength(street,1)?setStreetError(inputIsEmpty):setStreetError(false);
    }
    const handleNumber = (event) =>{
        let number = event.currentTarget.value;
         if(numberValid(number)){
             setNumber(number);
             !minLength(number,1)?setNumberError(inputIsEmpty):setNumberError(false);
           }
    }
    const handleNeighborhood = (event)=>{
        let neighborhood = event.currentTarget.value;
        !minLength(neighborhood,1)?setNeighborhoodError(inputIsEmpty):setNeighborhoodError(false);
    }
    const handleCity = (event)=>{
        let city = event.currentTarget.value;
        !minLength(city,1)?setCityError(inputIsEmpty):setCityError(false);
    }
  const  clearErrors = ()=>{
        setNameError(false);
        setCpfError(false);
        setEmailError(false);
        setStreetError(false);
        setNumberError(false);
        setNeighborhoodError(false);
        setCityError(false);
    }
    const handlerCpf = (event)=>{
       let value = event.currentTarget.value;
       if(event.nativeEvent.inputType=='deleteContentBackward'){
            setCpf(value);
        }else if(   /^(\d{0,3})([.]{0,1})(\d{0,3})([.]{0,1})(\d(0,3)([.]{0,1})([-]{0,1})(\d{0,2})  )/g.test(value)   ){
       // setCpf(value.replace(/^(\d{0,3})([.]{0,1})(\d{0,3})([.]{0,1})(\d(0,3)([.]{0,1})([-]{0,1})(\d{0,2})$/,"$1.$2.$3-");
    
        }
        setCpf(value.replace(/^(\d{3})(\d{3})(\d{3})$/g,"$1.$2.$3-"));
    }
    const handlerCep =(event)=>{
      let  value = event.currentTarget.value;
        if(event.nativeEvent.inputType=='deleteContentBackward'){
            setCep(value)
        }else if(/^(\d{0,5})([-]{0,1})(\d{0,3})$/g.test(value)){
        setCep(value.replace(/^(\d{5})(\d{0,3})$/,"$1-"))
        }
    }
    
    const fillAdress  =(adress)=>{
        let {logradouro,bairro,localidade} = adress;
        setStreet(logradouro);
        setNeighborhood(bairro);
        setCity(localidade);
    }

    return(
        <Modal
        onClose={() => setModalVisible(false)}
        onOpen={() => setModalVisible(true)}
        open={modalVisible}
        trigger={ <Button onClick={()=>setModalVisible(true)}>novo</Button>}
      >
        <div className={Style.container}>
            <div className={Style.close} onClick={()=>setModalVisible(false)}>
                X
            </div>
            <div className="clear"></div>
          <Form>
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
       

      </Modal>
    )
}