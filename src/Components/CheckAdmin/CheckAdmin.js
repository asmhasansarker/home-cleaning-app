import React, { useContext, useEffect, useState } from "react";
import { AdminCheck, UserContext } from "../../App";

const CheckAdmin = () => {
  const [user] = useContext(UserContext);
  const [admin, setAdmin] = useContext(AdminCheck);
 
  // console.log(user.email)

  useEffect(() => {
    fetch("https://stark-cove-09835.herokuapp.com/checkAdmin?email=" + user.email)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.length);
        if(data.length > 0){
            setAdmin(data.length);
        }
      });
  }, []);

  console.log(admin);

  return (
    <div>
      <h1>Admin Checking</h1>
    </div>
  );
};

export default CheckAdmin;
