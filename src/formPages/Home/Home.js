import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Amount from "../Amount/Amount";
import DateTime from "../DateTime/DateTime";
import "../NameGender1/Common.css";
import NameGender1 from "../NameGender1/NameGenger1";
import Note from "../Note/Note";
import FromTo from "./FromTo/FromTo";

const Home = () => {
    const [page,setPage]=useState(0)
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
console.log(page)
const activeComponent=()=>{
    if(page===0){
        return <NameGender1 register={register} setPage={setPage} page={page}/>
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
}

  return (
    <div className="row motherDiv">
      <div className="col-md-3 sideCol"></div>
      <div className="col-md-6 bodyCenter">
        <div className="childOfDiv">
           
          <form onSubmit={handleSubmit(onSubmit)}>
          {activeComponent()}
            {/* <NameGender1 register={register} /> */}
            {/* <FromTo register={register}/> */}
          </form>
        </div>
      </div>
      <div className="col-md-3 sideCol"></div>
    </div>
  );
};

export default Home;
