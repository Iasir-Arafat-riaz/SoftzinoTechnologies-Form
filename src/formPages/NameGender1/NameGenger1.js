import React from "react";
import "./Common.css"

const NameGender1 = () => {
  return (
    <div className="row motherDiv">
      <div  className="col-md-3 sideCol">
          <h2>First</h2>
      </div>
      <div className="col-md-6 bodyCenter" >
          <h2>Center</h2>
      </div>
      <div  className="col-md-3 sideCol">
          <h1>Last</h1></div>
    </div>
  );
};

export default NameGender1;
