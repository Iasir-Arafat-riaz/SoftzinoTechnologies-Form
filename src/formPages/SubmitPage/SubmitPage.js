import React, { useEffect, useState } from "react";
import { getLocal } from "../../utilities/localDb";

const SubmitPage = ({ register, page, setPage }) => {
  const [alldatas, setAllDatas] = useState({});
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    fetch("https://protected-anchorage-52714.herokuapp.com/passengers")
      .then((res) => res.json())
      .then((data) => setInfos(data));
  }, []);
  useEffect(() => {
    let allValue = {};
    const allField = [
      "fullName",
      "gender",
      "from",
      "to",
      "date",
      "time",
      "amount",
      "note",
    ];
    allField.forEach((name) => {
      allValue[name] = getLocal(name);
    });
    setAllDatas(allValue);
    console.log(allValue);
  }, []);

  const submitDatas = (e) => {
    e.preventDefault();
 
    const finding = infos.find((info) => info.fullName === alldatas?.fullName);
    const findingUser = finding?.fullName;
    console.log(findingUser);
    if (findingUser) {
      setPage(6);
    } else {
        setPage(7);
        console.log(page)
      fetch("https://protected-anchorage-52714.herokuapp.com/passengers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(alldatas),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.clear();
        })
        .catch((err) => console.log(err));
    }
  };
  const amountConvert = parseInt(alldatas?.amount) / 1.47;

  return (
    <div>
      <p>Name: {alldatas?.fullName}</p>
      <p>Gender: {alldatas?.gender}</p>
      <p>From: {alldatas?.from}</p>
      <p>To: {alldatas?.to}</p>
      <p>Date: {alldatas?.date}</p>
      <p>Time: {alldatas?.time}</p>
      <p>Amount: {amountConvert.toFixed(2)}</p>
      <p>Note: </p>
      <textarea
        className="inputSizing"
        value={alldatas?.note}
        name=""
        id=""
        cols="30"
        rows="5"
      ></textarea>

      <div className="buttonDiv">
        <button className="commonBtn" onClick={() => setPage(page - 1)}>
          Back
        </button>
        <button onClick={submitDatas} className="commonBtn" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubmitPage;
