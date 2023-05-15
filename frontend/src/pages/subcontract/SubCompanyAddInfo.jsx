import React from "react";
import { useState } from "react";

function SubCompanyAddInfo() {
  const [companyName, setCompanyName] = useState("");
  return (
    <div>
      <h1 className='text-xl font-bold'>SUB CONTRACT COMPANY INFORMATION</h1>
      <div>
        <div className='form-control w-full max-w-xs mb-3'>
          <label className='label'>
            <span className='label-text'>Sub Contract Company Name</span>
          </label>
          <input
            type='text'
            placeholder='Enter Name'
            className='input input-bordered w-full max-w-xs'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <button className='btn btn-sm btn-warning'>Submit</button>
      </div>
    </div>
  );
}

export default SubCompanyAddInfo;
