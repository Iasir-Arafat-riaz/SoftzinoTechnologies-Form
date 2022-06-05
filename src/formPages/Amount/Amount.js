import React from "react";
import { getLocal } from "../../utilities/localDb";

const Amount = ({ register, setPage, page }) => {
  return (
    <div>
      <label htmlFor="">
        Amount(BDT)
        <br />
        <input
        defaultValue={getLocal("amount")}
          className="inputSizing"
          {...register("amount")}
          type="number"
          name="amount"
          placeholder="৳"
          id="name"
          
        />
      </label>
      <div className="buttonDiv">
      <button className="commonBtn" onClick={()=>setPage(page-1)} >Back</button>
      <button className="commonBtn" onClick={()=>setPage(page+1)} >Next</button>
      </div>
    </div>
  );
};

export default Amount;
