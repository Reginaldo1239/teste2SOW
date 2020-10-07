import fetch from 'cross-fetch';

const BASEURL = 'http://localhost:5000/';

export const post=  (endPoint,body)=>{
  console.log(endPoint)
return new Promise( async (resolver,reject)=>{  
    fetch(BASEURL+endPoint, {
        method: 'POST',
        headers:{
           Accept: 'application/json',
           'Content-Type': 'application/json',
          // 'token':await readData('token')
        },
        body: JSON.stringify(body)
      }).then(async(data)=>resolver({status:data.status,data:await data.json()})).catch((error)=>{throw error}) 

})
} 

 
export const get = async (endPoint) =>{
    return new Promise(async(resolver,reject)=>{
        fetch(BASEURL+endPoint, {
          headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
         //   'token':await readData('token')
         },
          }).then(async(data)=> resolver({status:data.status,headers:data.headers,data: await data.json()} ))
          .catch((error)=>{
              throw error
          })
          } )
 
    }


export const del =  (endpoint,body)=>{
    return new Promise(async(resolver,reject)=>{
        fetch(BASEURL+endpoint,{
          method: 'DELETE',
          headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
         //   'token':await readData('token')
         },
          body: JSON.stringify(body)
        }).then(async(data)=>resolver({status:data.status,data:await data.json()}))
    })
}
export const put = async (endPoint,body)=>{
  return new Promise(async(resolver,reject)=>{
    fetch(BASEURL+endPoint,{
      method:'PUT',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
     //   'token':await readData('token')
     },
      body:JSON.stringify(body)
    }).then(async(data)=>resolver({status:data.status,data:await data.json()})).catch((error)=>{
        throw error
    }
        
        )
  }) 
}