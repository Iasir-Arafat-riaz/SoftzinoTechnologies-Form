import React from "react";
import { getLocal } from "../../utilities/localDb";

const DateTime = ({ register, setPage, page }) => {
  return (
    <div>
      <label htmlFor="">Date</label>
      <br />
      <input defaultValue={getLocal("date")} className="inputSizing" {...register("date")} type="date" name="date" />
      <br />
      <br />
      <label htmlFor="">Time</label>
      <br />
      <input defaultValue={getLocal("time")} className="inputSizing" {...register("time")} type="time" name="time" />
      <div className="buttonDiv">
        <button className="commonBtn" onClick={() => setPage(page - 1)}>Back</button>
        <button className="commonBtn" type="submit" onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default DateTime;
