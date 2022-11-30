import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './EmployeeDetails.module.css';
// import ChittyManagers from '../EmployeeSheet/SheetDisplay';
// import { Route } from 'react-router-dom';





const Manager = () => {
   
    const [selectedFile,setState] = useState(null);

    // On file select (from the pop up)
    const onFileChange = event => {
    // Update the state
        setState(event.target.files[0]);
    };


    const onFileUpload = (e) => {
        e.preventDefault();
        setState(e.target.files);

        const formData = new FormData();
        formData.append('file',selectedFile);
        fetch('http://localhost:8080/api/managers/upload', {method: 'post',body: formData})
        .then(res => {
            if (res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });
    };

   
    const fileData = () => {
        if (selectedFile) {
            return (
                <div className={classes.detailsShown}>
                    <h6>File Details:</h6>
                    <p>File Name: {selectedFile.name}</p>
                    <p>
                        Last Modified:{" "}
                        {selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />

                    <h6>Choose before Pressing the Upload button</h6>

                  
                </div>
            );
        }
    };
   
        return (
            <div className={classes.manage}>
                <h1 className={classes.header}>
                    Employee Data
                </h1>
                <div className={classes.upload}>
                    <h4>
                        Upload employee details
                    </h4>
                    <div>

                        <br></br>
                        <input type="file" onChange={onFileChange} />
                        <button onClick={onFileUpload}>
                            Upload!
                       
                        </button>
                        </div>
                        
                    </div>
                    <div className={classes.filedata}>{fileData()}</div>
                    <Link to="/employee/managerslist">
                        <button className={classes.button}><span>Show</span></button>
                    </Link>
                    
                </div>
            </div>
        );
    }


export default Manager;













































































































