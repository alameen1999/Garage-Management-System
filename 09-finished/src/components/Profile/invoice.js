import axios from "axios";
import { useEffect, useState,useRef } from "react";
import { useLocation } from "react-router-dom";
import ReactToPrint from 'react-to-print'
import classes from './UserProfile.module.css';

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
            
            
        
                <div className={classes.profile}>
                <ReactToPrint trigger={() => (
                <button>Generate Invoice</button>

            )}
                content={() => componentRef.current} />
                

        
            <div >
                <table class="table position-relative start-0"  ref={componentRef} >

                    <thead class="thead-dark">
                        <tr>
                            <h3>SERVICE DETAILS</h3>
                        </tr>

                        <tr>
                            <th>{userDetails?.name}</th>
                            <th>{userDetails?.vehicleNumber}</th>
                            <th>{userDetails?.mobileNumber}</th>
                            <th>{userDetails?.vehicleType}</th>
                            <th>{userDetails?.engineNumber}</th>
                            <th>{userDetails?.chaseNumber}</th>

                        </tr>

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
                                    <td>{arr?.estimate_product_name}</td>
                                    <td>{arr?.productQuanity}</td>
                                    <td>{arr?.productPrice} </td>

                                </tr>
                            })

                        }
                        {
                            serviceDetails.map(function (arr, i) {
                                return <tr>
                                    <td scope="row">{arr?.estimate_service_name}</td>

                                    <td>{arr?.estimatePrice} </td>

                                </tr>
                            })

                        }
                    </tbody>
                </table>
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