import React from 'react';

const Note = ({register,page,setPage}) => {
    return (
        <div>
         <label htmlFor="">Note</label>
         <br />
          <textarea {...register("note")} name="note" id="" cols="30" rows="7"  className="inputSizing"></textarea>
          <div className="buttonDiv">
      <button onClick={()=>setPage(page-1)} >Back</button>
      <button onClick={()=>setPage(page+1)} >Next</button>
      </div>
        </div>
    );
};

export default Note;