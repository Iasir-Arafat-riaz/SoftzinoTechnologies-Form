import React from 'react';
import { getLocal } from '../../utilities/localDb';

const Note = ({register,page,setPage}) => {
    return (
        <div>
         <label htmlFor="">Note</label>
         <br />
          <textarea defaultValue={getLocal("note")} {...register("note")} name="note" id="" cols="30" rows="7"  className="inputSizing"></textarea>
          <div className="buttonDiv">
      <button className="commonBtn" onClick={()=>setPage(page-1)} >Back</button>
      <button className="commonBtn" onClick={()=>setPage(page+1)} >Next</button>
      </div>
        </div>
    );
};

export default Note;