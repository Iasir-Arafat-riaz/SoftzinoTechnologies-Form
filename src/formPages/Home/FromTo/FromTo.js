import React from "react";
import { getLocal } from "../../../utilities/localDb";

const FromTo = ({ register,setPage,page }) => {
    // const handleClick=()=>{
    //     //console.log("hle riaz")
    // }
  return (
    <div>
        <label htmlFor="">From</label>
        <br />
      <select defaultValue={getLocal("from")} className="inputSizing" {...register("from")}>
        
        <option value="東京"> 東京</option>
        <option value="名古屋">名古屋</option>
      </select>
      <br />
      <br />
      <label htmlFor="">To</label>
      <br />
      <select defaultValue={getLocal("to")}  className="inputSizing" {...register("to")}>
        <option value="横浜">横浜</option>
        <option value="大阪">大阪</option>
      </select>
      <div className="buttonDiv">
      <button className="commonBtn" onClick={()=>setPage(page-1)} >Back</button>
      <button className="commonBtn" onClick={()=>setPage(page+1)} >Next</button>
      </div>
      
    </div>
  );
};

export default FromTo;
