exports.minLength=(value,minLength)=>{
    if(value.length>=minLength &&  value !=undefined && value !=null){
        return true;
    }else{
        return false;
    }
} 
exports.emailValid=(email)=>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }else{
        return false;
    }
} 