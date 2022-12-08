import axios from "axios";
import { useEffect, useState,useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactToPrint from 'react-to-print'
import classes from './invoice.module.css';

const Invoice = () => {

    const componentRef=useRef()


    const [userDetails, setUserDetails] = useState();
    const [estimId, setestimId] = useState();
    const [prodDetails, setprodDetails] = useState([])
    const [serviceDetails, setserviceDetails] = useState([])
    useEffect(() => {
        console.log("useEffect", JSON.parse(sessionStorage.getItem('estimId')));
        setUserDetails(JSON.parse(sessionStorage.getItem('customerDetails')))
        setestimId(JSON.parse(sessionStorage.getItem('estimId')))
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

    return (
            
            
        
               <div className={classes.jobcard}>
                
                

        
        <div >
                <table className={classes.stylingtable}
                  class="table position-relative start-0"  ref={componentRef} >

                    <thead>
                        <tr>
                            <h3>SERVICE DETAILS</h3>
                        </tr>

                        <tr>
                            <h6>Customer Name: {userDetails?.name}</h6>
                        </tr>
                        <tr>
                        <h6>Vehicle Number: {userDetails?.vehicleNumber}</h6>
                        </tr>
                        <tr>
                        <h6>Phone Number: {userDetails?.mobileNumber}</h6>
                        </tr>
                        <tr>
                        <h6>Vehicle Type: {userDetails?.vehicleType}</h6>
                        </tr>
                        <tr>
                        <h6>Engine Number: {userDetails?.engineNumber}</h6>
                        </tr>
                        <tr>

                        </tr>
                        <h6>Chase Number: {userDetails?.chaseNumber}</h6>
                        <tr>
                            {/* <th scope="col">Product Id</th> */}
                            <th scope="col">Product name</th>
                            <th scope="col">Quntity</th>
                            <th scope="col">Price</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            prodDetails.map(function (arr, i) {
                                return <tr>
                                    {/* <th scope="row">{arr?.estimateProductsId}</th> */}
                                    <td className={classes.stylingheader}>{arr?.estimate_product_name}</td>
                                    <td className={classes.stylingheader}>{arr?.productQuanity}</td>
                                    <td className={classes.stylingheader}>{arr?.productPrice} </td>

                                </tr>
                            })

                        }
                        {
                            serviceDetails.map(function (arr, i) {
                                return <tr>
                                    <td className={classes.stylingheader} scope="row">{arr?.estimate_service_name}</td>

                                    <td className={classes.stylingheader}>{arr?.estimatePrice} </td>

                                </tr>
                            })

                        }
                    </tbody>
                   
                </table>
                
                </div>

                <div className={classes.btn}>
                    <ReactToPrint trigger={() => (
                <button>Generate Invoice</button>

            )}
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