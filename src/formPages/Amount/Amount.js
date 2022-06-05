import React from "react";

const Amount = ({ register, setPage, page }) => {
  return (
    <div>
      <label htmlFor="">
        Amount(BDT)
        <br />
        <input
          className="inputSizing"
          {...register("amount")}
          type="number"
          name="amount"
          placeholder=" ৳"
          id="name"
          onFocus={(x)=>{ return x.toLocaleString("en-US")}}
        />
      </label>
      <div className="buttonDiv">
      <button onClick={()=>setPage(page-1)} >Back</button>
      <button onClick={()=>setPage(page+1)} >Next</button>
      </div>
    </div>
  );
};

export default Amount;
