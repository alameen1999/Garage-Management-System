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
                    <div className={classes.filedata}>{fileData()}</div>
                    <Link to="/employee/managerslist">
                        <button className={classes.button}><span>Show</span></button>
                    </Link>
                    
                </div>
            </div>
        );
    }


export default Manager;













































































































// anjima class based function


// import axios from 'axios';
// import React,{Component} from 'react';
// // import Button from '../UI/Button/Button';
// import classes from "./EmployeeDetails.module.css";

// class EmployeeDetails extends Component {

//     state = {
//     selectedFile: null
//     };
//         onFileChange = event => {
  
//     this.setState({ selectedFile: event.target.files[0] });

//     };
   
//     onFileUpload = () => {

//     // Create an object of formData
//     let formData = new FormData();

//     // Update the formData object
//     formData.append(
//     "employeedetails",
//     this.state.selectedFile,
//     this.state.selectedFile.name
//     );

   
//  axios.post("http://127.0.0.1:8000/employee/addemployee/",formData).then(response=>{
//     console.log(response);
//     alert(JSON.stringify(response.data.message))
//  })
    
//     };

    
//     // File content to be displayed after
//     // file upload is complete
//     fileData = () => {

//     if (this.state.selectedFile) {
//             return (
//                 <div className={classes.inside_userpage}>
//                     <div>
//                         <h2>File Details:</h2>
//                         <p>File Name: {this.state.selectedFile.name}</p>

//                         <p>File Type: {this.state.selectedFile.type}</p>

//                         <p>
//                             Last Modified:{" "}
//                             {this.state.selectedFile.lastModifiedDate.toDateString()}
//                         </p>

//                      </div>
//                 </div>
            
//             );
//     } else {

//             return (
//                 <div className={classes.inside_userpage}>
//                     <br />
//                     <h4>Choose a file before Pressing the Upload button</h4>
//                 </div>
//             );
//         }
//     };

//     render() {
//         return (
//             <div className={classes.userpage}>
//                 <div>
//                     <h3>
//                         Upload Employee Details
//                     </h3>
//                     <div>
//                         <input type="file" accept=".xlsx"  onChange={this.onFileChange} />
//                         <button className='btn' onClick={this.onFileUpload}>
//                             Upload
//                         </button>
//                     </div>
//                     {this.fileData()}
//                 </div>
//                 </div>
//         );
//     }
// }

// export default EmployeeDetails;