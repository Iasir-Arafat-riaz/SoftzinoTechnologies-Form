import React from 'react';

const SuccessPage = () => {
    return (
        <div>
            <p style={{marginTop:"5rem",marginBottom:"3rem"}}>Thank you!</p>
            <p>Your reservation ID is :{Math.floor(Math.random() * 10000000000)}</p>
        </div>
    );
};

export default SuccessPage;