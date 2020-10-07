import React, { useState,useEffect } from 'react';
import Style from './formEmploye.module.css';
import { Button, Header, Image, Modal,Form ,Input,Message} from 'semantic-ui-react'
import {getAdress} from '../../api/adressApi';
import {minLength,emailValid} from '../../util/validation';

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

    const [msgError,setMsgError]=useState([]);

    const [nameError,setNameError] = useState(false);
    const [cpfError,setCpfError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [cepError,setCepError] = useState(false);
    const [streetError,setStreetError]= useState(false);
    const [numberError,setNumberError] = useState(false);
    const [neighborhoodError,setNeighborhoodError] = useState(false);
    const [cityError,setCityError] = useState(false);
    useEffect(()=>{
        let a = "04851722";
        a = a.replace(/(\d{5})?(\d{3})/,"$1-");
        console.log(a)
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

    const submitForm =()=>{
        if(validForm()){

        }
    }

    const validForm =()=>{
        clearErrors();
        const emptyMsg = 'o campo está vázio';
        
        let errors = [];
            if(!minLength(name,1)){
                setNameError(emptyMsg);
                errors.push({name:emptyMsg})
            }
            if(!minLength(cpf,1)){
                setCpfError(emptyMsg);
                errors.push({cpf:emptyMsg});

            }
            if(!minLength(email,1)){
                setEmailError(emptyMsg);
                errors.push({email:emptyMsg})
            }else if(!emailValid(email)){
                setEmailError('email invalido');
                errors.push({email:'o email invalido'});
            }
            if(!minLength(cep,1)){
                setCepError(emptyMsg);
                errors.push({cep:emptyMsg});
            }
            if(!minLength(street,1)){
                setStreetError(emptyMsg);
                errors.push({street:emptyMsg});
            }
            if(!minLength(number,1)){
                setNumberError(emptyMsg);
                errors.push({number:emptyMsg});
            }else if(!/\^d*$/.test(number)){
                setNumberError('o número invalid');
                errors.push({number:'o número invalid'});
            }
            if(!minLength(neighborhood,1)){
                setNeighborhoodError(emptyMsg);
                errors.push({neighborhood:emptyMsg});
            }
            if(!minLength(city,1)){
                setCityError(emptyMsg);
                errors.push({city:emptyMsg})
            }
            return errors.length===0;
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
          <Form error={msgError.length>0}>
                <header className={Style.header}>
                    <h2>novo usuário</h2>
                </header>
                <Form.Group widths='equal'>
                        <Form.Input 
                        value={name}
                        onChange={(event)=>setName(event.currentTarget.value)}
                        fluid 
                        label='nome'
                        error={nameError}
                        />
                        <Form.Input
                        value={cpf}
                        onChange={(event)=>handlerCpf(event)}
                        fluid 
                        label='cpf'
                        error={cpfError}
                        />
                 </Form.Group>
                         <Form.Input 
                         value={email}
                         onChange={(event)=>setEmail(event.currentTarget.value)}
                         fluid label='email'
                         error={emailError}  />
                 <Form.Input 
                 className={Style.inputCep}
                 value={cep }
                 onChange={(event)=>handlerCep(event)}
                 fluid 
                 label='cep'
                 error={cepError}
                 />
                 <Form.Group >
                        <Form.Input  
                        className={Style.inputStreet} 
                        value={street}
                        onChange={(event)=>setStreet(event.currentTarget.value)}
                        fluid 
                        label='rua'
                        error={streetError} />
                        <Form.Input  
                        className={Style.inputNumber} 
                        value={number}
                        onChange={(event)=>setNumber(event.currentTarget.value)}
                        fluid 
                        label='nº'
                        error={numberError} />
                 </Form.Group >
                 <Form.Group >
                        <Form.Input  
                        className={Style.inputNeighborhood}
                        value={neighborhood}
                        onChange={(event)=>setNeighborhood(event.currentTarget.value)}
                        fluid 
                        label='bairro'
                        error={neighborhoodError} />
                        <Form.Input  
                        className={Style.inputCity} 
                        value={city}
                        onChange={(event)=>setCity(event.currentTarget.value)}
                        fluid 
                        label='cidade'
                        error={cityError} />
                 </Form.Group >
                 <Button
                 onClick={()=>submitForm()}
                 >salvar</Button>
                 <Message
      error
      header={'erro'}
      content={()=><>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      </>}

    />
        </Form>
          </div>
       

      </Modal>
    )
}