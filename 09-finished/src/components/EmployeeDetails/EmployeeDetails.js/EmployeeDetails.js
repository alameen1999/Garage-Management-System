import axios from 'axios';
import React,{Component} from 'react';
// import Button from '../UI/Button/Button';
import classes from "./EmployeeDetails.module.css";

class EmployeeDetails extends Component {
    

    state = {
    selectedFile: null
    };
        onFileChange = event => {
  
    this.setState({ selectedFile: event.target.files[0] });

    };
   
    onFileUpload = () => {

    // Create an object of formData
    let formData = new FormData();

    // Update the formData object
    formData.append(
    "employeedetails",
    this.state.selectedFile,
    this.state.selectedFile.name
    );

   
 axios.post("http://127.0.0.1:8000/employee/addemployee/",formData).then(response=>{
    console.log(response);
    alert(JSON.stringify(response.data.message))
 })
    
    };

    
    // File content to be displayed after
    // file upload is complete
    fileData = () => {

    if (this.state.selectedFile) {
            return (
                <div className={classes.inside_userpage}>
                    <div>
                        <h2>File Details:</h2>
                        <p>File Name: {this.state.selectedFile.name}</p>

                        <p>File Type: {this.state.selectedFile.type}</p>

                        <p>
                            Last Modified:{" "}
                            {this.state.selectedFile.lastModifiedDate.toDateString()}
                        </p>

                     </div>
                </div>
            
            );
    } else {

            return (
                <div className={classes.inside_userpage}>
                    <br />
                    <h4>Choose a file before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {
        return (
            <div className={classes.userpage}>
                <div>
                    <h3>
                        Upload Employee Details
                    </h3>
                    <div>
                        <input type="file" accept=".xlsx"  onChange={this.onFileChange} />
                        <button className='btn' onClick={this.onFileUpload}>
                            Upload
                        </button>
                    </div>
                    {this.fileData()}
                </div>
                </div>
        );
    }
}

export default EmployeeDetails;