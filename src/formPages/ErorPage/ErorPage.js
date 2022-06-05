import React from 'react';

const ErorPage = ({setPage,page}) => {
    return (
        <div>
            <p style={{marginTop:"5rem",marginBottom:"3rem"}}>Error !!!</p>
            <p>This name already exist</p>
            <div className="buttonDiv">
        <button className="commonBtn" onClick={() => setPage(page - 1)}>
          Back
        </button>
        
      </div>
        </div>
    );
};

export default ErorPage;