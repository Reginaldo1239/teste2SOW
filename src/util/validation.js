exports.minLength=(value,minLength)=>{
    return value.length>=minLength &&  value !=undefined && value !=null;
} 
exports.numberValid = (number)=>{
    return /^\d*$/.test(number);
}
exports.emailValid=(email)=>{
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
} 
exports.cepValid = (cep)=>{
    console.log(/^(\d{0,5})([-]{0,1})(\d{0,3})$/g.test(cep))
  return /^(\d{0,5})([-]{0,1})(\d{0,3})$/g.test(cep);
}