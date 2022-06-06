const addToLocal=(field,value)=>{
    const stringyLocal= JSON.stringify(value);
localStorage.setItem(field,stringyLocal);
}


const getLocal=(field)=>{
    
const getLoc= localStorage.getItem(field);

if(getLoc!=="undefined"){
    console.log(field,typeof getLoc);
    const parseLoc= JSON.parse(getLoc);
    return parseLoc;
}
else {
return null;
}

}
export {addToLocal,getLocal};