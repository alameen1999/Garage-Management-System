import axios from 'axios';
import React, { useRef, useState } from 'react'


const JobCard = () => {
    let obj ={ vehicleNumber: "",
    name: "",
    mobileNumber: '',
    vehicleType: "",
    engineNumber: "",
    chaseNumber: "",
}

    const [customerDetails, setCustomerDetails] = useState({...obj})
    const vehicleNumInputRef = useRef();
    const handleSearch = () => {
        if(vehicleNumInputRef.current.value.length == 8){
            axios.get(`http://127.0.0.1:8000/estimate/getcustomer/${vehicleNumInputRef.current.value}`)
            .then(response => {
            if(response.data.length !== 0){
                setCustomerDetails(response.data[0])
            }
            else{
                alert("Vehicle number does not exist")
            }
           
                
            })
        }
       
      
    }
    return (
        <div className='text-center mt-5'>
            <div >
                <div >

                    <h3 className='pt-5'>Click on search icon</h3>
                    <div>
                        <input type="text" placeholder="Enter the Vehicle Number" ref={vehicleNumInputRef} required  maxLength={8} onChange={handleSearch}/><br></br>

                        
                    </div>
                </div>
            </div>
            <div className='text-center  '>

                <table class="table position-relative start-0">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Vehicle Number</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Vehicle Type</th>
                            <th scope="col">Engine Number</th>
                            <th scope="col">Chase Number</th>
                            
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr let arr of >
                            <th scope="row">{customerDetails.vehicleNumber}</th>
                            <td>{customerDetails.name}</td>
                            <td>{customerDetails.mobileNumber}</td>
                            <td>{customerDetails.vehicleNumber}</td>
                            <td>{customerDetails.engineNumber}</td>
                            <td>{customerDetails.chaseNumber}</td>
                            
                        </tr>
                        
                    </tbody>
                </table>

              
            </div>
        </div>


    )

};

export default JobCard;