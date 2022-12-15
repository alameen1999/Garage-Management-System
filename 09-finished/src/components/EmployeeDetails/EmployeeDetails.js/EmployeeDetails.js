import React, { useState,useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './EmployeeDetails.module.css';
// import ChittyManagers from '../EmployeeSheet/SheetDisplay';
// import { Route } from 'react-router-dom';





const EmployeeDetails = () => {
   
    const [selectedFile,setState] = useState(null);

    const empcodeInputRef = useRef();
   const phonenoInputRef = useRef();
    const addressInputRef = useRef();
    const exprienceInputRef = useRef();
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const genderInputRef = useRef();
    const qualificationInputRef = useRef();
    const useridInputRef = useRef();

// post method for addemployee starts here

async function addEmployeeHandler() {
    // console.log(districtRef);
    const user = {
        Empcode: empcodeInputRef.current.value,
        Name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        phoneNo: phonenoInputRef.current.value,
        address: addressInputRef.current.value,
        exprience: exprienceInputRef.current.value,
        gender: genderInputRef.current.value,
        qualification: qualificationInputRef.current.value,
        userId: JSON.parse(sessionStorage.getItem("userID"))
       
    };
    // const myJSON = JSON.stringify(user);
    // console.log(myJSON);
    const response = await fetch('http://127.0.0.1:8000/employee/singleemployee/', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }


    // On file select (from the pop up)
    const onFileChange = event => {
    // Update the state
        setState(event.target.files[0]);
    };


    const onFileUpload = (e) => {
        e.preventDefault();
        setState(e.target.files);

        const formData = new FormData();
        formData.append('employeedetails',selectedFile);
        fetch('http://127.0.0.1:8000/employee/addemployee/', {method: 'post',body: formData})
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

                    <label id='star'> Choose before Pressing the Upload button</label>

                  
                </div>
            );
        }
    };
   
        return (
            <div className={classes.emp}>
                <h1 className={classes.header}>
                    Employee Data
                </h1>
                {/* <div className={classes.upload}>
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
                        
                    
                    <div className={classes.filedata}>{fileData()}</div>
                    <Link to="/employee/managerslist">
                        <button className={classes.button}><span>Show</span></button>
                    </Link>
                    </div> */}
                    <div className={classes.wrap}>
                <div className={classes.manage}>
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
                    <div className={classes.filedata}>{fileData()}</div>
                        <Link to="/employee/managerslist">
                            <button className={classes.button}><span>Show</span></button>
                        </Link>
                </div>
            </div>
            <div className={classes.forms}>
                    <form onSubmit={addEmployeeHandler}>
                        <div className={classes.control}>
                            <label htmlFor='empcode'>Empcode</label>
                            <input type='empcode' id='empcode' required ref={empcodeInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='name'>Name </label>
                            <input type='name' id='name' required ref={nameInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' required ref={emailInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='phoneno'>PhoneNo</label>
                            <input type='phoneno' id='phoneno' required ref={phonenoInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='address'>Address</label>
                            <input type='address' id='address' required ref={addressInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='exprience'>Exprience</label>
                            <input type='exprience' id='exprience'required ref={exprienceInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='gender'>Gender</label>
                            <input type='gender' id='gender'required ref={genderInputRef}/>
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='qualification'>Qualification</label>
                            <input type='qualification' id='qualification'required ref={qualificationInputRef}/>
                        </div>
                        {/* <div className={classes.control}>
                            <label htmlFor='userid'>UserId</label>
                            <input type='userid' id='userid'ref={useridInputRef}/>
                        </div> */}
                        <button>Submit</button>
                    </form>
            </div>
         


                   
            </div>  
            </div>
        );  
    }

                
            
            


export default EmployeeDetails;













































































































