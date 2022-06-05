import React from "react";

const DateTime = ({ register, setPage, page }) => {
  return (
    <div>
      <label htmlFor="">Date</label>
      <br />
      <input className="inputSizing" {...register("date")} type="date" name="date" />
      <br />
      <br />
      <label htmlFor="">Time</label>
      <br />
      <input className="inputSizing" {...register("time")} type="time" name="time" />
      <div className="buttonDiv">
        <button onClick={() => setPage(page - 1)}>Back</button>
        <button type="submit" onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default DateTime;
