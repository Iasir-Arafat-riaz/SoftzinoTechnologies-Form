import React from "react";
// import { useForm } from "react-hook-form";
import "./Common.css";

const NameGender1 = ({ register }) => {
  return (
    
      <div >
        <label htmlFor="">
          Name
          <br />
          <input
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
        <button >Next</button>
        
        </div>
      </div>
    
  );
};

export default NameGender1;
