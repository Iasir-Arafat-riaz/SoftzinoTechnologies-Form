import React from "react";
import { useForm } from "react-hook-form";
import "../NameGender1/Common.css";
import NameGender1 from "../NameGender1/NameGenger1";

const Home = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="row motherDiv">
      <div className="col-md-3 sideCol"></div>
      <div className="col-md-6 bodyCenter">
        <div className="childOfDiv">
          <form onSubmit={handleSubmit(onSubmit)}>
            <NameGender1 register={register} />
          </form>
        </div>
      </div>
      <div className="col-md-3 sideCol"></div>
    </div>
  );
};

export default Home;
