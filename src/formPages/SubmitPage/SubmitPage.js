import React from 'react';

const SubmitPage = ({register,formDatas,page,setPage}) => {
    return (
        <div>
            <h2>SubmitPage</h2>
            <p>{formDatas.from}</p>
            <div className="buttonDiv">
      <button onClick={()=>setPage(page-1)} >Back</button>
      <button type="submit" >Submit</button>
      </div>
        </div>
    );
};

export default SubmitPage;