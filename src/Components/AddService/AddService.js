import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const serviceKey = () => {
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
      return n.slice(0, 9);
    };


    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        // console.log(info);
        formData.append('file', file);
        formData.append('serviceTitle', info.serviceTitle);
        formData.append('serviceDescription', info.serviceDescription);
        formData.append('serviceCharge', info.serviceCharge);
        formData.append('serviceKey', serviceKey());
        
        fetch('https://stark-cove-09835.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

            alert('New Service Added');

            
    }

  return (
    <div className="container row ">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9 jumbotron">
      <h1 className="text-center">Add a Service</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Service Title</label>
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="serviceTitle"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="serviceDescription"
            placeholder="Enter description"
          />
        </div>
        <div className="form-group">
          <label>Service Charge</label>
          <input
            onBlur={handleBlur}
            type="text"
            className="form-control"
            name="serviceCharge"
            placeholder="Enter service charge.."
          />
        </div>
        <div className="form-group">
          <label>Upload a image</label>
          <input onChange={handleFileChange} type="file" className="form-control" placeholder="Picture" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="reset" className="ml-5 btn btn-primary">
          Reset
        </button>
          
      </form>
      </div>
      
    </div>
  );
};

export default AddService;
