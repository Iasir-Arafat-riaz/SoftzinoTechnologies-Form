import React, { useEffect } from "react";
import { getLocal } from "../../utilities/localDb";
// import { useForm } from "react-hook-form";
import "./Common.css";

const NameGender1 = ({ register, setPage, page, watch, setValue }) => {
  useEffect(() => {
    setValue("gender", getLocal("gender"));
  }, []);
  return (
    <div>
      <label htmlFor="">
        Name
        <br />
        <input
          defaultValue={getLocal("fullName")}
          required
          className="inputSizing"
          {...register("fullName")}
          type="text"
          name="fullName"
          placeholder="Enter your name"
          id="name"
        />
      </label>
      <br />
      <br />
      <label htmlFor="">Gender</label>
      <br />
      <label htmlFor="field-rain">
        <input
          {...register("gender")}
          type="radio"
          name="gender"
          value="male"
          id="field-rain"
        />
        Male
      </label>
      <br />
      <label htmlFor="field-wind">
        <input
          {...register("gender")}
          type="radio"
          name="gender"
          value="female"
          id="field-wind"
        />
        Female
      </label>
      <div className="buttonDiv">
        {/* <button type="submit">Send</button> */}
        <span></span>
        <button className="commonBtn" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NameGender1;
