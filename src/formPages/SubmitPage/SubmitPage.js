import React, { useEffect, useState } from 'react';
import {getLocal} from "../../utilities/localDb"

const SubmitPage = ({register,formDatas,page,setPage}) => {
    const [alldatas,setAllDatas]=useState({});
     useEffect(()=>{
         let allValue ={}
    const allField= ["fullName","gender","from","to","date","time","amount","note"];
    allField.forEach(name=>{
allValue[name]=getLocal(name)
      
    })
  setAllDatas(allValue)
  console.log(allValue);
  },[])

const submitDatas=()=>{
    localStorage.clear()
}

    return (
        <div>
            <h2>SubmitPage</h2>
            <p>Name: {alldatas?.fullName}</p>
            <p>Gender: {alldatas?.gender}</p>
            <p>From: {alldatas?.from}</p>
            <p>To: {alldatas?.to}</p>
            <p>Date: {alldatas?.date}</p>
            <p>Time: {alldatas?.time}</p>
            <p>Amount: {alldatas?.amount}</p>
            <p>Note: </p>
            <textarea defaultValue={alldatas?.note} name="" id="" cols="30" rows="5"></textarea>

            <div className="buttonDiv">
      <button className="commonBtn" onClick={()=>setPage(page-1)} >Back</button>
      <button onClick={submitDatas} className="commonBtn" type="submit" >Submit</button>
      </div>
        </div>
    );
};

export default SubmitPage;