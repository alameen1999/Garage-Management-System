import axios from "axios";
import { useEffect, useState,useRef } from "react";
// import { useLocation } from "react-router-dom";
import ReactToPrint from 'react-to-print'
import classes from './invoice.module.css';

const Invoice = () => {

    const componentRef=useRef()


    const [userDetails, setUserDetails] = useState();
    const [estimId, setestimId] = useState();
    const [total, settotal] = useState();
    const [prodDetails, setprodDetails] = useState([])
    const [serviceDetails, setserviceDetails] = useState([])
    useEffect(() => {
        console.log("useEffect", JSON.parse(sessionStorage.getItem('estimId')));
        setUserDetails(JSON.parse(sessionStorage.getItem('customerDetails')))
        setestimId(JSON.parse(sessionStorage.getItem('estimId')))
        settotal(JSON.parse(sessionStorage.getItem('total')))
        axios.get(`http://127.0.0.1:8000/estimate/estimateproducts/${JSON.parse(sessionStorage.getItem('estimId'))}`)
            .then(res => {
                console.log(prodDetails);
                setprodDetails(res.data)
                axios.get(`http://127.0.0.1:8000/estimate/estimateservices/${JSON.parse(sessionStorage.getItem('estimId'))}`)
                    .then(res => {
                        setserviceDetails(res.data)
                        console.log(serviceDetails);
                    })
            })

    }, [])

    const changeStatus=()=>{
        axios.put(`http://127.0.0.1:8000/estimate/updateworkstatus/${JSON.parse(sessionStorage.getItem('estimId'))}`,{
            status:true
        })
    }

    return (
            
            
        
               <div className={classes.jobcard}>
                
                

        
        <div  ref={componentRef} >
                    <h1 class="text-center">AUTOMOTIVE</h1>
                            
                <table 
                    >

                    <thead>
                      <tr> <h3>SERVICE DETAILS</h3></tr>  
                   
                        

                        <tr >
                            <h6>Customer Name: </h6>
                            <td>{userDetails?.name}</td>
                        </tr>
                        <tr>
                        <h6>Vehicle Number:</h6>
                        <td> {userDetails?.vehicleNumber}</td>
                        </tr>
                        <tr>
                        <h6>Phone Number:</h6>
                        <td> {userDetails?.mobileNumber}</td>
                        </tr>
                        <tr >
                        <h6>Vehicle Type: </h6>
                        <td>{userDetails?.vehicleType}</td>
                        </tr>
                        <tr >
                        <h6>Engine Number: </h6>
                        <td>{userDetails?.engineNumber}</td>
                        </tr>
                        <tr>

                        </tr >
                        <tr>
                        <h6>Chase Number: </h6>
                         <td>{userDetails?.chaseNumber}</td>
                        </tr>
                        
                        
                       
                       
                        <tr className={classes.stylinrow}>
                            {/* <th scope="col">Product Id</th> */}
                            <th scope="col">Product name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quntity</th>
                            

                        </tr>
                    </thead>

                    <tbody>
                        {
                            prodDetails.map(function (arr, i) {
                                return <tr className={classes.stylinrow}>
                                    {/* <th scope="row">{arr?.estimateProductsId}</th> */}
                                    <td className={classes.stylingheader}>{arr?.estimate_product_name}</td>
                                    <td className={classes.stylingheader}>{arr?.productPrice} </td>
                                    <td className={classes.stylingheader}>{arr?.productQuanity}</td>
                                    

                                </tr>
                            })

                        }
                        {
                            serviceDetails.map(function (arr, i) {
                                return <tr className={classes.stylinrow}>
                                    <td className={classes.stylingheader} scope="row">{arr?.estimate_service_name}</td>

                                    <td className={classes.stylingheader}>{arr?.estimatePrice} </td>

                                </tr>
                            })

                        }

                        <tr>
                            <th>TOTAL:</th>
                            <td>{total}</td>
                        </tr>
                    </tbody>
                   
                </table>
                
                </div>

                <div className={classes.btn} onClick={changeStatus}>
                    <ReactToPrint   trigger={() => ( 
                    <button>Generate Invoice</button> )}
                content={() => componentRef.current} />
                    </div>
                    

                {/* <table class="table position-relative start-0">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Service name</th>


                        </tr>
                    </thead>

                    <tbody>
                        {
                            serviceDetails.map(function (arr, i) {
                                return <tr>
                                    <th scope="row">{arr?.estimate_service_name}</th>

                                    <td> </td>

                                </tr>
                            })

                        }
                    </tbody>
                </table> */}


            </div>

            
        
    )
}

export default Invoice