// // import Select from "react-select";
// // import Multiselect from "multiselect-react-dropdown";
// // import DatePicker from "react-datepicker";
// // import { useEffect, useState } from "react";
// // import classes from './EstimationDetails.module.css';
// // import "react-datepicker/dist/react-datepicker.css";



// // import Axios from 'axios';
// // import Dummy from '../../api/Dummy';

// // const optionss = [
// //   { value: "  two wheelr", label: "Two wheeler" },
// //   { value: "four wheeler", label: "four wheeeler" },
// //   { value: "LMV", label: "LMV" },
// //   { value: "HMV", label: "HMV" }
// // ];



// // const EstimationDetails = () => {
// //   const [services, setServices] = useState([]);
// //   const [selectedValue, setSelectedValue] = useState(null);




// //   const data = [
// //     { services: "Oil and oil filter check and replacement", id: 1, price: 250 },
// //     { services: "Brake fluid check and top up", id: 2, price: 150 },
// //     { services: "Coolant check and top up", id: 3, price: 200 },
// //     { services: "Windscreen wash check and top up", id: 4, price: 150 },
// //     { services: "Battery check", id: 5, price: 100 },
// //     { services: "Charging system check", id: 6, price: 150 },
// //     { services: "Tyre tread and pressure check", id: 7, price: 50 },
// //     { services: "Suspension check", id: 8, price: 150 },
// //     { services: "Windscreen wipers check", id: 9, price: 120 }
// //   ];
// //   const [options] = useState(data);

// //   const productestimation = [
// //     { product: " MRF Tyre", id: 1, price: 250, },
// //     { product: "Apollo Engine oil", id: 2, price: 150 },
// //     { product: "Exide", id: 3, price: 200 },
// //     { product: "Bosh", id: 4, price: 150 },
// //     { product: "Liqui Molly", id: 5, price: 100 },
// //     { product: "Bosh 2", id: 6, price: 150 },
// //     { product: "Tyre tread ", id: 7, price: 50 },
// //     { product: "Break Cable", id: 8, price: 150 },
// //     { product: "WindScreen", id: 9, price: 120 }
// //   ];
// //   const [productoptions] = useState(productestimation);


// //   const labourestimation = [
// //     { labour: "Fast Delivery", price: 10000 },
// //     { labour: "Normal Delivery", price: 5000 }
// //   ];

// //   const [labouroptions] = useState(labourestimation);



// //   useEffect(() => {
// //     fetchData()
// //   }, []
// //   )

// //   const handleChange = value => {
// //     setSelectedValue(value);
// //   }


// //   const fetchData = async () => {
// //     const services = await (await Axios.get('http://127.0.0.1:8000/estimation/getservices')).data
// //     console.log(services)
// //     setServices(services.map((data) => {
// //       return { i: data.id, services: data.services }
// //     }))
// //     setSelectedValue(services[0])
// //     console.log(services)
// //   }


// //   const [estimation, setEstimation] = useState([]);
// //   const [name, setName] = useState('');
// //   const [phoneno, setPhoneno] = useState('');
// //   const [vehicleno, setVehicleno] = useState('');
// //   const [vehicletype, setVehicletype] = useState('');
// //   const [engineno, setEngineno] = useState('');
// //   const [chaseno, setChaseno] = useState('');
// //   const [estimationdate, setEstimationdate] = useState('');
// //   const [startDate, setStartDate] = useState(new Date());
// //   const [labourcost, setLabourcost] = useState('');
// //   const [discountcost, setDiscountcost] = useState('');






// //   const postEstimation = (e) => {
// //     e.preventDefault();

// //     Axios.post('http://127.0.0.1:8000/estimate/addcustomer/', {
// //       vehicleNumber: vehicleno,
// //       name: name,
// //       mobileNumber: phoneno,
// //       vehicleType: vehicletype,
// //       engineNumber: engineno,
// //       chaseNumber: chaseno,
// //       userId: sessionStorage.getItem('userID')
// //     }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
// //   }

// //   const [servicePrice, setServicePrice] = useState(0);
// //   const [productPrice, setProductPrice] = useState(0);
// //   const [labourPrice, setLabourPrice] = useState(0);
// //   const [selectedService, setSelectedServices] = useState(0);
// //   const [selectedProducts, setSelectedProducts] = useState(0);
// //   const [totalPrice, setTotalPrice] = useState(0);
// //   const addService = (val) => {
// //     setSelectedServices(val);
// //     console.log(val.reduce((accumulator, service) => accumulator + service.price, 0))
// //     setServicePrice(val.reduce((accumulator, service) => accumulator + service.price, 0));
// //   };

// //   const addProductcost = (val) => {
// //     setSelectedProducts(val);
// //     console.log(val.reduce((accumulator, product) => accumulator + product.price, 0))
// //     setProductPrice(val.reduce((accumulator, product) => accumulator + product.price, 0));
// //   };






// //   return (
// //     <div >

// //       <table>
// //         <tr>
// //           <th>
// //             <label className={classes.title}>Enter Customer Name</label>
// //             <input className={classes.textbox} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
// //           </th>

// //           <th>
// //             <label className={classes.title}>Enter Phone Number</label>
// //             <input className={classes.textbox} placeholder="+91" value={phoneno} onChange={(e) => setPhoneno(e.target.value)}></input>
// //           </th>


// //           <th>
// //             <label className={classes.title}>Enter Vehicle Number</label>
// //             <input className={classes.textbox} placeholder="KL XX XXXX" value={vehicleno} onChange={(e) => setVehicleno(e.target.value)}></input>
// //           </th>
// //         </tr>

// //         <tr>
// //           <th>
// //             <label className={classes.title}>Select Vehicle Type</label>
// //             <Select className={classes.textbox} options={optionss} onChange={(e) => setVehicletype(e.value)}></Select>
// //           </th>

// //           <th>
// //             <label className={classes.title}>Enter Engine Number</label>
// //             <input className={classes.textbox} placeholder="Engine Number" value={engineno} onChange={(e) => setEngineno(e.target.value)}></input>
// //           </th>



// //           <th>
// //             <label className={classes.title}>Enter Chase Number</label>
// //             <input className={classes.textbox} placeholder="Chase Number" value={chaseno} onChange={(e) => setChaseno(e.target.value)}></input>
// //           </th>
// //         </tr>

// //         <tr>
// //           <th><button className={classes.button} onClick={postEstimation} >SUBMIT</button></th>
// //         </tr>



// //         <tr>
// //           <th>
// //             <label className={classes.title}> Select Date of Estimation</label>
// //             <DatePicker className={classes.textbox} selected={estimationdate} onChange={(date) => setEstimationdate(date)} dateFormat="yyyy-MM-dd" />
// //           </th>


// //           <th>
// //             <label value={vehicleno} onChange={(e) => setVehicleno(e.target.value)} className={classes.title}>Enter Vehicle Number</label>
// //             <input className={classes.textbox} placeholder="KL XX XXXX" value={vehicleno} onChange={(e) => setVehicleno(e.target.value)}></input>
// //           </th>


// //           <th>
// //             <label className={classes.title}>Select Services Available</label><th>
// //               <Multiselect
// //                 className={classes.textbox}
// //                 options={options}
// //                 displayValue="services"
// //                 onSelect={(view) => addService(view)} />
// //             </th>
// //             <label className={classes.totalPrice}>Services Cost:{servicePrice}</label>


// //             <th>
// //             </th>
// //           </th>

// //         </tr>


// //         <tr>
// //           <th>
// //             <label className={classes.title}>Select Products Available</label>
// //             <Select className={classes.textbox} options={productestimation} onChange={(e) => setVehicletype(e.value)}></Select>

// //             <label className={classes.totalPrice}>Product Cost:{productPrice}</label>
// //           </th>

// //           <th>
// //             <label className={classes.title}>Labour Cost</label>
// //             <input value={labourcost} onChange={(e) => setLabourcost(e.target.value)} className={classes.textbox} type="number" required placeholder="labour charges"></input>
// //           </th>

// //           <th>
// //             <label className={classes.title}>Discount Charges</label>
// //             <input className={classes.textbox} value={discountcost} onChange={(e) => setDiscountcost(e.target.value)} type="number" required placeholder="Discount charges"></input>
// //           </th>
// //         </tr>
// //         <tr>
// //           <th>
// //             <button className={classes.textbox}>Total Cost: </button>
// //             <label className={classes.totalPrice}>{totalPrice}</label>
// //           </th>
// //         </tr>
// // <button>heloo</button>

// //       </table>

// //     </div>


// //   );
// // };

// // export default EstimationDetails;



// import Select from "react-select";
// import Multiselect from "multiselect-react-dropdown";
// import DatePicker from "react-datepicker";
// import { useEffect, useState } from "react";
// import classes from "./EstimationDetails.module.css";
// import "react-datepicker/dist/react-datepicker.css";
// import Axios from "axios";
// import Product from "../../api/Product";
// import axios from "axios";


// const optionss = [
//   { value: "  two wheelr", label: "Two wheeler" },
//   { value: "four wheeler", label: "four wheeeler" },
//   { value: "LMV", label: "LMV" },
//   { value: "HMV", label: "HMV" },
// ];

// const data = [
//   { services: "Oil and oil filter check and replacement", id: 1, price: 250 },
//   { services: "Brake fluid check and top up", id: 2, price: 150 },
//   { services: "Coolant check and top up", id: 3, price: 200 },
//   { services: "Windscreen wash check and top up", id: 4, price: 150 },
//   { services: "Battery check", id: 5, price: 100 },
//   { services: "Charging system check", id: 6, price: 150 },
//   { services: "Tyre tread and pressure check", id: 7, price: 50 },
//   { services: "Suspension check", id: 8, price: 150 },
//   { services: "Windscreen wipers check", id: 9, price: 120 },
// ];

// const productestimation = [
//   { product: " MRF Tyre", id: 1, price: 250 },
//   { product: "Apollo Engine oil", id: 2, price: 150 },
//   { product: "Exide", id: 3, price: 200 },
//   { product: "Bosh", id: 4, price: 150 },
//   { product: "Liqui Molly", id: 5, price: 100 },
//   { product: "Bosh 2", id: 6, price: 150 },
//   { product: "Tyre tread ", id: 7, price: 50 },
//   { product: "Break Cable", id: 8, price: 150 },
//   { product: "WindScreen", id: 9, price: 120 },
// ];
// const labourestimation = [
//   { labour: "Fast Delivery", price: 10000 },
//   { labour: "Normal Delivery", price: 5000 },
// ];

// const EstimationDetails = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [services, setServices] = useState([]);
//   const [estimation, setEstimation] = useState([]);
//   const [options] = useState(data);
//   const [name, setName] = useState("");
//   const [phoneno, setPhoneno] = useState("");
//   const [vehicleno, setVehicleno] = useState("");
//   const [vehicletype, setVehicletype] = useState("");
//   const [engineno, setEngineno] = useState("");
//   const [chaseno, setChaseno] = useState("");
//   const [estimationdate, setEstimationdate] = useState("");
//   const [labourcost, setLabourcost] = useState("");
//   const [discountcost, setDiscountcost] = useState("");
//   const [selectedValue, setSelectedValue] = useState(null);
//   const [productoptions] = useState(productestimation);
//   const [labouroptions] = useState(labourestimation);
//   const [servicePrice, setServicePrice] = useState(0);
//   const [productPrice, setProductPrice] = useState(0);
//   const [labourPrice, setLabourPrice] = useState(0);
//   const [selectedService, setSelectedServices] = useState(0);
//   const [selectedProducts, setSelectedProducts] = useState([]);

//   const [items, setItems] = useState([]);
//   const [cart, setCart] = useState({
//     products: selectedProducts,
//     services,
//   });
//   const [totalPrice, setTotalPrice] = useState(0);

//   // const options = data.map((data) => {
//   //   return {value:data.id,label:data.services}
//   //  })

//   //  setServices(options)
//   // setSelectedValue(services[0])
//   const handleChange = (value) => {
//     setSelectedValue(value);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   // const fetchData = async () => {
//   //   const services = await (
//   //     await Axios.get("http://127.0.0.1:8000/estimation/getservices")
//   //   ).data;
//   //   // console.log(services)
//   //   setServices(
//   //     services.map((data) => {
//   //       return { i: data.id, services: data.services };
//   //     })
//   //   );
//   //   setSelectedValue(services[0]);
//   //   console.log(services);
//   // };

//   const fetchData = async () => {
//     const productestimation = await (await Product.get('/getestimateproducts/4')).data
//     setItems(productestimation.slice(0, 8).map((data) => {
//       console.log();
//       return { value: data.id, label: data.productName }
//     }))
//     (productoptions[0])
//   }















//   const postEstimation = (e) => {
//     e.preventDefault();

//     Axios.post("http://127.0.0.1:8000/estimate/addcustomer/", {
//       vehicleNumber: vehicleno,
//       name: name,
//       mobileNumber: phoneno,
//       vehicleType: vehicletype,
//       engineNumber: engineno,
//       chaseNumber: chaseno,
//       userId: sessionStorage.getItem("userID"),
//     })
//       .then((res) => console.log("Posting data", res))
//       .catch((err) => console.log(err));
//   };

//   const addService = (val) => {
//     setSelectedServices(val);
//     console.log(
//       val.reduce((accumulator, service) => accumulator + service.price, 0)
//     );
//     setServicePrice(
//       val.reduce((accumulator, service) => accumulator + service.price, 0)
//     );
//   };

//   const addProduct = (val) => {
//     setProductPrice(val);
//     console.log("hello")
//     console.log(
//       val.reduce((accumulator, product) => accumulator + product.price, 0)
//     );
//     setProductPrice(
//       val.reduce((accumulator, product) => accumulator + product.price, 0)
//     );
//   };



//   const addProductQuantity = (id) => {
//     setSelectedProducts((preVal) => {
//       let rest = preVal.filter((product) => product.id !== id);
//       let addedProduct = preVal.filter((product) => product.id === id)[0];
//       return [
//         ...rest,
//         { ...addedProduct, quantity: addedProduct.quantity + 1 },
//       ];
//     });
//   };
//   const decreaseProductQuantity = (id) => {
//     setSelectedProducts((preVal) => {
//       let rest = preVal.filter((product) => product.id !== id);
//       let addedProduct = preVal.filter((product) => product.id === id)[0];
//       if (addedProduct.quantity === 1) return [...rest];
//       else
//         return [
//           ...rest,
//           { ...addedProduct, quantity: addedProduct.quantity - 1 },
//         ];
//     });
//   };
//   const addProducts = (products) =>
//     setSelectedProducts(
//       products.map((product) => {
//         let selected_ = productoptions.filter((p) => p.id == product.value)[0];

//         return { ...selected_, quantity: 1 };
//       })





//     );





//   //Total Price after Discount Deductions

//   // const addTotalprice = (val) => {
//   //   setTotalPrice(val);
//   //   console.log(val.reduce((accumulator, service,product,labour) => accumulator+labour.price+product.price+service.price, 0))
//   //   setTotalPrice(val.reduce((accumulator, service,product,labour) => accumulator+labour.price+product.price+service.price, 0));

//   // };

//   return (
//     <div>
//       {/* <h4>Register New Customer</h4> */}
//       <table className={classes.profile}>
//         <tr>
//           <th>
//             <label className={classes.title}>Enter Customer Name</label>
//             <input
//               className={classes.textbox}
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             ></input>
//           </th>

//           <th>
//             <label className={classes.title}>Enter Phone Number</label>
//             <input
//               className={classes.textbox}
//               placeholder="+91"
//               value={phoneno}
//               onChange={(e) => setPhoneno(e.target.value)}
//             ></input>
//           </th>

//           <th>
//             <label className={classes.title}>Enter Vehicle Number</label>
//             <input
//               className={classes.textbox}
//               placeholder="KL XX XXXX"
//               value={vehicleno}
//               onChange={(e) => setVehicleno(e.target.value)}
//             ></input>
//           </th>
//         </tr>

//         <tr>
//           <th>
//             <label className={classes.title}>Select Vehicle Type</label>
//             <Select
//               className={classes.textbox}
//               options={optionss}
//               onChange={(e) => setVehicletype(e.value)}
//             ></Select>
//           </th>

//           <th>
//             <label className={classes.title}>Enter Engine Number</label>
//             <input
//               className={classes.textbox}
//               placeholder="Engine Number"
//               value={engineno}
//               onChange={(e) => setEngineno(e.target.value)}
//             ></input>
//           </th>

//           <th>
//             <label className={classes.title}>Enter Chase Number</label>
//             <input
//               className={classes.textbox}
//               placeholder="Chase Number"
//               value={chaseno}
//               onChange={(e) => setChaseno(e.target.value)}
//             ></input>
//           </th>
//         </tr>

//         <tr>
//           <th>
//             <button className={classes.button} onClick={postEstimation}>
//               SUBMIT
//             </button>
//           </th>
//         </tr>

//         <tr>
//           <th>
//             <label className={classes.title}> Select Date of Estimation</label>
//             <DatePicker
//               className={classes.textbox}
//               selected={estimationdate}
//               onChange={(date) => setEstimationdate(date)}
//               dateFormat="yyyy-MM-dd"
//             />
//           </th>

//           <th>
//             <label
//               value={vehicleno}
//               onChange={(e) => setVehicleno(e.target.value)}
//               className={classes.title}
//             >
//               Enter Vehicle Number
//             </label>
//             <input
//               className={classes.textbox}
//               placeholder="KL XX XXXX"
//               value={vehicleno}
//               onChange={(e) => setVehicleno(e.target.value)}
//             ></input>
//           </th>

//           <th>
//             <label className={classes.title}>Select Services Available</label>
//             <th>
//               <Multiselect
//                 className={classes.textbox}
//                 options={options}
//                 displayValue="services"
//                 onSelect={(view) => addService(view)}
//               />
//             </th>
//             <label className={classes.totalPrice}>
//               Services Cost:{servicePrice}
//             </label>

//             <th></th>
//           </th>
//         </tr>

//         <tr>
//           <th>
//             {console.log(selectedProducts)}
//             <label className={classes.title}>Select Products Available</label>
//             <Select
//               isMulti
//               className={classes.textbox}

//               options={productoptions.map((product) => {
//                 return {
//                   value: product.id,
//                   label: product.product,
//                 };
//               })}
//               onChange={(products) => addProducts(products)}
//               onSelect={(view) => addProduct(view)}

//             />

//             <label className={classes.totalPrice}>
//               Product Cost:{productPrice}
//               </label>

//           </th>

//           {/* <th>
//             <label className={classes.title}>Labour Cost</label>
//             <input
//               value={labourcost}
//               onChange={(e) => setLabourcost(e.target.value)}
//               className={classes.textbox}
//               type="number"
//               required
//               placeholder="labour charges"
//             ></input>
//           </th> */}

//           {/* <th>
//             <label className={classes.title}>Discount Charges</label>
//             <input
//               className={classes.textbox}
//               value={discountcost}
//               onChange={(e) => setDiscountcost(e.target.value)}
//               type="number"
//               required
//               placeholder="Discount charges"
//             ></input>
//           </th> */}
//         </tr>
//         <tr>
//           {/* <th>
//             {selectedProducts.length &&
//               selectedProducts.map((product) => {
//                 return (
//                   <div key={product.id}>
//                     <div>{product.product}</div>
//                     <span>
//                       <button onClick={() => addProductQuantity(product.id)}>
//                         +
//                       </button>
//                     </span>
//                     <span>
//                       <button
//                         onClick={() => decreaseProductQuantity(product.id)}
//                       >
//                         -
//                       </button>
//                     </span>
//                     <span>{product.quantity}</span>
//                   </div>
//                 );
//               })}
//           </th> */}
//           <th>

//           </th>
//         </tr>

//       </table>

//       <button className='position-absolute'>Total Cost: </button>
//       {/* <label className={classes.totalPrice}>{totalPrice}</label> */}
//     </div>
//   );
// };

// export default EstimationDetails;

import classes from "./EstimationDetails.module.css";
import Select from "react-select";
import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

const EstimationDetails = () => {
  const [name, setName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [vehicleno, setVehicleno] = useState("");
  const [vehicletype, setVehicletype] = useState("");
  const [engineno, setEngineno] = useState("");
  const [chaseno, setChaseno] = useState("");
  const options = [
      { value: "  two wheelr", label: "Two wheeler" },
      { value: "four wheeler", label: "four wheeeler" },
      { value: "LMV", label: "LMV" },
      { value: "HMV", label: "HMV" },
    ];
  const submitHandler=()=>{
    console.log("herer");
    axios.post("http://127.0.0.1:8000/estimate/addcustomer/", {
            vehicleNumber: vehicleno,
            name: name,
            mobileNumber: phoneno,
            vehicleType: vehicletype,
            engineNumber: engineno,
            chaseNumber: chaseno,
            userId: JSON.parse(sessionStorage.getItem("userID"))
          })
            .then((res) => alert("Posting data", res.message))
            .catch((err) => console.log(err));
        
  }
  return (
    <div className={classes.profile}>
      <h4>Register New Customer</h4>
    <div className="mx-auto">
      <div className="row row-cols-lg-3 row-cols-sm-1 ">
        <div>
          <label className={classes.title}>Enter Customer Name</label>
          <input
            className={classes.textbox}
            placeholder="Name"  value={name}
            onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <label className={classes.title}>Enter Phone Number</label>
          <input
            className={classes.textbox}
            placeholder="+91"
            value={phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
          ></input>
        </div>
        <div>
          <label className={classes.title}>Enter Vehicle Number</label>
          <input
            className={classes.textbox}
            placeholder="KL XX XXXX"
            value={vehicleno}
            onChange={(e) => setVehicleno(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="row row-cols-lg-3 row-cols-sm-1">
        <div>
        <label className={classes.title}>Select Vehicle Type</label>
        <input
            className={classes.textbox}
            placeholder="CAR | Bike"
            value={vehicletype}
            onChange={(e) => setVehicletype(e.target.value)}
          ></input>
        {/* <Select
              className={classes.textbox}
              options={options}
            onChange={(e) => setVehicletype(e.target.value)}
            ></Select> */}
        </div>
        <div>
        <label className={classes.title}>Enter Engine Number</label>
            <input
              className={classes.textbox}
              placeholder="Engine Number"
              value={engineno}
              onChange={(e) => setEngineno(e.target.value)}
            ></input>
        </div>
        <div>
        <label className={classes.title}>Enter Chase Number</label>
             <input
              className={classes.textbox}
              placeholder="Chase Number"
              value={chaseno}
              onChange={(e) => setChaseno(e.target.value)}
            ></input>
        </div>
      </div>
      <button  onClick={submitHandler}>Submit</button>
    </div>

    <div className="row">
      <div className="col">
      <label className={classes.title}> Select Date of Estimation</label>
             <DatePicker
              className={classes.textbox}
              
              dateFormat="yyyy-MM-dd"
            />
      </div>
      <div>
      <label
              
              className={classes.title}
            >
              Enter Vehicle Number
            </label>
            <input
              className={classes.textbox}
              placeholder="KL XX XXXX"
              value={vehicleno}
              onChange={(e) => setVehicleno(e.target.value)}
            ></input>
      </div>


    </div>
    </div>
  )
}

export default EstimationDetails;


