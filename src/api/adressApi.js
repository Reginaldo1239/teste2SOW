import fetch from 'cross-fetch';

export const getAdress = async (cep) =>{
    return new Promise(async(resolver,reject)=>{
        fetch(`https://viacep.com.br/ws/${cep}/json/`, {
          headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
          //  'token':await readData('token')
         },
          }).then(async(data)=> resolver({status:data.status,data:await data.json()} ) )
          .catch((error)=>{
            console.log(error)
              throw error
          })
          } )
 
    }