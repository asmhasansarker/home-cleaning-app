import React from "react";

const ManageSingleBooking = ({ service }) => {
  const { serviceTitle, _id } = service;

//   const handleChange = (e) =>{
//     const changedStatus = {
//       newStatus : e.target.value
//     }
    
//     fetch(`https://stark-cove-09835.herokuapp.com/updateStatus/${_id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(changedStatus),
//     }).then((res) => {
//       console.log("server side response");
//     });
//     console.log(changedStatus);
// }


  return (
    <>
      <div className="col-md-6 mt-2">{serviceTitle}</div>
      <div className="col-md-6 mt-2">
        <select
        //   onChange={handleChange}
          name="status"
          className="form-select w-50 "
          aria-label="Default select example"
        >
          <option selected value="Pending">
            Pending
          </option>
          <option value="On going">On going</option>
          <option value="Done">Done</option>
        </select>
      </div>
    </>
  );
};

export default ManageSingleBooking;
