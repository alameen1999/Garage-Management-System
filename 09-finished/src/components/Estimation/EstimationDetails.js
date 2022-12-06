import Select from "react-select";
import Multiselect from "multiselect-react-dropdown";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import classes from './EstimationDetails.module.css';
import "react-datepicker/dist/react-datepicker.css";



import Axios from 'axios';
import Dummy from '../../api/Dummy';

const options = [
  { value: "  two wheelr", label: "Two wheeler" },
  { value: "four wheeler", label: "four wheeeler" },
  { value: "LMV", label: "LMV" },
  { value: "HMV", label: "HMV" }
];



const EstimationDetails = () => {
  const [services, setServices] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);




  const data = [
    { services: "Oil and oil filter check and replacement", id: 1, price: 250 },
    { services: "Brake fluid check and top up", id: 2, price: 150 },
    { services: "Coolant check and top up", id: 3, price: 200 },
    { services: "Windscreen wash check and top up", id: 4, price: 150 },
    { services: "Battery check", id: 5, price: 100 },
    { services: "Charging system check", id: 6, price: 150 },
    { services: "Tyre tread and pressure check", id: 7, price: 50 },
    { services: "Suspension check", id: 8, price: 150 },
    { services: "Windscreen wipers check", id: 9, price: 120 }
  ];
  const [options] = useState(data);

  const productestimation = [
    { product: " MRF Tyre", id: 1, price: 250 , },
    { product: "Apollo Engine oil", id: 2, price: 150 },
    { product: "Exide", id: 3, price: 200 },
    { product: "Bosh", id: 4, price: 150 },
    { product: "Liqui Molly", id: 5, price: 100 },
    { product: "Bosh 2", id: 6, price: 150 },
    { product: "Tyre tread ", id: 7, price: 50 },
    { product: "Break Cable", id: 8, price: 150 },
    { product: "WindScreen", id: 9, price: 120 }
  ];
  const [productoptions] = useState(productestimation);


  const labourestimation = [
    {labour: "Fast Delivery", price: 10000},
    {labour: "Normal Delivery", price: 5000}
  ];

  const [labouroptions] = useState(labourestimation);

  // const options = data.map((data) => {
  //   return {value:data.id,label:data.services}
  //  })
   

  //  setServices(options)
      // setSelectedValue(services[0])

  useEffect(() => {
    fetchData()   },[] 
    )

    const handleChange = value => {
      setSelectedValue(value);
     }
  
    
    const fetchData = async() => {
      const services =await(await Axios.get('http://127.0.0.1:8000/estimation/getservices')).data
      console.log(services)
      setServices(services.map((data) => {
       return {i:data.id,services:data.services}
      }))
      setSelectedValue(services[0])
      console.log(services)
    }
 

  const [estimation, setEstimation] = useState([]);
  const [name, setName] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [vehicleno, setVehicleno] = useState('');
  const [vehicletype, setVehicletype] = useState('');
  const [engineno, setEngineno] = useState('');
  const [chaseno , setChaseno] = useState('');
  const [estimationdate, setEstimationdate] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [labourcost,setLabourcost] = useState('');
  const [discountcost, setDiscountcost] = useState('');

  




 const postEstimation = (e) => {
  e.preventDefault();
  
  Axios.post('http://127.0.0.1:8000/estimate/addcustomer/',{
      vehicleNumber: vehicleno,
      name: name,
      mobileNumber: phoneno,
      vehicleType: vehicletype,
      engineNumber:  engineno,
      chaseNumber: chaseno,
      userId: sessionStorage.getItem('userID')
  }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
 }

  const [servicePrice, setServicePrice] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [labourPrice, setLabourPrice] = useState(0);
  const [selectedService, setSelectedServices] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const addService = (val) => {
    setSelectedServices(val);
    console.log(val.reduce((accumulator, service) => accumulator+service.price, 0))
    setServicePrice(val.reduce((accumulator,service) => accumulator+service.price, 0));
  };

  const addProductcost = (val) => {
    setSelectedProducts(val);
    console.log(val.reduce((accumulator, product) => accumulator+product.price, 0))
    setProductPrice(val.reduce((accumulator,product) => accumulator+product.price, 0));
  };


  

  //Total Price after Discount Deductions

  // const addTotalprice = (val) => {
  //   setTotalPrice(val);
  //   console.log(val.reduce((accumulator, service,product,labour) => accumulator+labour.price+product.price+service.price, 0))
  //   setTotalPrice(val.reduce((accumulator, service,product,labour) => accumulator+labour.price+product.price+service.price, 0));
    
  // };












  return (
    <div >
      {/* <h4>Register New Customer</h4> */}
      <table>
        <tr>
              <th>
              <label className={classes.title}>Enter Customer Name</label>
              <input  className={classes.textbox} placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)}></input>
              </th>
              
              <th>
              <label className={classes.title}>Enter Phone Number</label>
              <input className={classes.textbox} placeholder="+91" value={phoneno} onChange={(e) => setPhoneno(e.target.value)}></input>
              </th>
           
         
              <th>
              <label className={classes.title}>Enter Vehicle Number</label>
              <input className={classes.textbox} placeholder="KL XX XXXX" value={vehicleno} onChange={(e) => setVehicleno(e.target.value)}></input>
              </th>
          </tr>
          
          <tr>
                <th>
                <label className={classes.title}>Select Vehicle Type</label>
                <Select className={classes.textbox} options={options} onChange={(e) => setVehicletype(e.value)}></Select>
                </th>
                
                <th>
                <label className={classes.title}>Enter Engine Number</label>
                <input className={classes.textbox} placeholder="Engine Number" value={engineno} onChange={(e) => setEngineno(e.target.value)}></input>
                </th>
                
                
                
                <th>
                <label className={classes.title}>Enter Chase Number</label>
                <input className={classes.textbox} placeholder="Chase Number" value={chaseno} onChange={(e) => setChaseno(e.target.value)}></input>
                </th>
                </tr>
                
          <tr>
                <th><button  className={classes.button} onClick={postEstimation} >SUBMIT</button></th>
          </tr>
           
           
           
           <tr>
                <th>
                <label className={classes.title}> Select Date of Estimation</label> 
                <DatePicker  className={classes.textbox} selected={estimationdate} onChange={(date) => setEstimationdate(date)} />
                </th> 


              <th>
              <label  value={vehicleno} onChange={(e) => setVehicleno(e.target.value)} className={classes.title}>Enter Vehicle Number</label>
              <input className={classes.textbox} placeholder="KL XX XXXX" value={vehicleno} onChange={(e) => setVehicleno(e.target.value)}></input>
              </th>

            
              <th>
              <label className={classes.title}>Select Services Available</label><th>
              <Multiselect 
              className={classes.textbox}
              options={options}
              displayValue="services" 
              onSelect={(view) => addService(view)}/>
              </th>
              <label className={classes.totalPrice}>Services Cost:{servicePrice}</label>
            

               <th>
              </th>
               </th>

           </tr>

               
                 <tr>
                <th>
                <label className={classes.title}>Select Products Available</label>
                <Multiselect 
                className={classes.textbox}
                options={productoptions}
                displayValue="product" 
                onSelect={(view) => addProductcost(view)}/>
                <label className={classes.totalPrice}>Product Cost:{productPrice}</label>
                </th>

                  <th>
                   <label className={classes.title}>Labour Cost</label> 
                   <input value={labourcost}  onChange={(e) => setLabourcost(e.target.value)}className={classes.textbox} type= "number" required placeholder="labour charges"></input>
                     </th>

                     <th>
                   <label className={classes.title}>Discount Charges</label> 
                   <input  className={classes.textbox}value={discountcost}  onChange={(e) => setDiscountcost(e.target.value)} type= "number" required placeholder="Discount charges"></input>
                     </th>
                     </tr> 
                     <tr>
                     <th>
                       <button className={classes.textbox}>Total Cost: </button>
                      <label className={classes.totalPrice}>{totalPrice}</label>
                     </th>
                     </tr>
                      
                      
                      </table>
                     
                 </div>

                 
  );
};

export default EstimationDetails;