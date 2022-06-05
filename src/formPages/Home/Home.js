import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addToLocal, getLocal } from "../../utilities/localDb";
import Amount from "../Amount/Amount";
import DateTime from "../DateTime/DateTime";
import ErorPage from "../ErorPage/ErorPage";
import "../NameGender1/Common.css";
import NameGender1 from "../NameGender1/NameGenger1";
import Note from "../Note/Note";
import SubmitPage from "../SubmitPage/SubmitPage";
import SuccessPage from "../SuccessPage/SuccessPage";
import FromTo from "./FromTo/FromTo";

const Home = () => {
    const [page,setPage]=useState(0)
    
  const { register, watch,getValues,setValue} = useForm();
  const name = watch("fullName");
  const gander = watch("gender");
  const from = watch("from");
  const to = watch("to");
  const date = watch("date");
  const time = watch("time");
  const amount = watch("amount");
  
  const note = watch("note");
  
  // const multipleValues = getValues(["fullName", "gender"]);
  // console.log(multipleValues);

  // useEffect(()=>{
  //   const allField= ["name","gender","from","to","date","time","amount","note"];
  //   allField.forEach(name=>{
  //     setValue(name,getLocal(name));
  //   })
  //   const multipleValues = getValues();
  // console.log(multipleValues);
  // },[])
  

  useEffect(()=>{
  const multipleValues = getValues();
  // console.log(multipleValues);
  const totalKeys= Object.keys(multipleValues);
  console.log(totalKeys);
  totalKeys.forEach(name=>{
    addToLocal(name,watch(name));
  })
  },[name,gander,from,to,date,time,amount,note]);

  

  // const onSubmit = (data) => {
  //     console.log(data)
  //     setFormDatas(data)
  //   };
console.log(page)
const activeComponent=()=>{
    if(page===0){
        return <NameGender1 setValue={setValue} watch={watch} register={register} setPage={setPage} page={page}/>
    }
    else if(page===1){
        return   <FromTo register={register} setPage={setPage} page={page}/>
    }
    else if(page===2){
        return   <DateTime register={register} setPage={setPage} page={page}/>
    }
    else if(page===3){
        return   <Amount register={register} setPage={setPage} page={page}/>
    }
    else if(page===4){
        return   <Note register={register} setPage={setPage} page={page}/>
    }
    else if(page===5){
        return   <SubmitPage register={register} setPage={setPage} page={page} />
    }
    else if(page===6){
        return   <ErorPage register={register} setPage={setPage} page={page} />
    }
    else if(page===7){
        return   <SuccessPage register={register} setPage={setPage} page={page} />
    }
}

  return (
    <div className="row motherDiv">
      <div className="col-md-3 sideCol"></div>
      <div className="col-md-6 bodyCenter">
        <div className="childOfDiv">
           
          <form>
          {activeComponent()}
           
          </form>
        </div>
      </div>
      <div className="col-md-3 sideCol"></div>
    </div>
  );
};

export default Home;
