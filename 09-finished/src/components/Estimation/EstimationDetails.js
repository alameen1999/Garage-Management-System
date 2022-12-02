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

  useEffect(() => {
    fetchData()   },[] 
    )

    const handleChange = value => {
      setSelectedValue(value);
     }
  
    
    const fetchData = async() => {
      const albums = await (await Dummy.get('/albums')).data
      setServices(albums.map((data) => {
       return {value:data.id,label:data.services}
      }))
      setSelectedValue(services[0])
    }
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

  const [estimation, setEstimation] = useState([]);
  const [name, setName] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [vehicleno, setVehicleno] = useState('');
  const [vehicletype, setVehicletype] = useState('');
  const [engineno, setEngineno] = useState('');
  const [chaseno , setChaseno] = useState('');
  const [estimationdate, setEstimationdate] = useState('');
  const [startDate, setStartDate] = useState(new Date());


//  useEffect(() => {
//   Axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(res => {
//     console.log("Getting from", res.estimation)
//     setEstimation(res.estimation)
//   }).catch(err => console.log(err))
//  }, [])

 const postEstimation = (e) => {
  e.preventDefault();
  alert('New User Registered')
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

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedService, setSelectedServices] = useState(0);
  const addService = (val) => {
    setSelectedServices(val);
    console.log(val.reduce((accumulator, service) => accumulator+service.price, 0))
    setTotalPrice(val.reduce((accumulator,service) => accumulator+service.price, 0));
  };

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
            


            <th>
           
           <button  className={classes.button} onClick={postEstimation} >SUBMIT</button>
           
           </th>
           </tr>
         
           
           

           <tr>

            <th>
              <label className={classes.title}> Select Date of Estimation</label> 
            <input type="date" className={classes.textbox}  value={estimationdate} onChange={(e) => console.log(e)}></input> 
            <DatePicker selected={estimationdate} onChange={(date) => setEstimationdate(date)} />
            </th> 

           <th>
            <label className={classes.title}>Enter Vehicle Number</label>
            <input className={classes.textbox} placeholder="KL XX XXXX"></input>
            </th>
           <th>
            <label className={classes.title}>Select Services Available</label>
            <Multiselect className={classes.textbox}
              options={services}
              // value={data}
              displayValue={services}
              // onChange={handleChange}
              onSelect={(view) => addService(view)}
            />
            </th>

            <th>
            <label className={classes.title}>Select Products Available</label>
            <Multiselect className={classes.textbox}
              options={services}
              // value={selectedValue}
              displayValue={selectedService}
              // onChange={handleChange}
              onSelect={(view) => addService(view)}
            />
            </th>






            <th>
              <label className={classes.totalPrice}>Services Cost:{totalPrice}</label></th>
              
            
           </tr>
           <tr>
           <th>
              <label className={classes.title}>Labour Cost</label><br></br>
              <input type = "number" className={classes.textbox}></input>
            </th>
            <th>
              <label className={classes.totalPrice}>Total Cost:{totalPrice}</label></th>
              
           </tr>
           
            
            
         
         
        {/* </tr>
        <tr>
            <th>
              <label className={classes.totalPrice}>Total Price:{totalPrice}</label></th>
              
         
          </tr>

          <tr>
          <th>
            <label className={classes.title}>Select Products Available</label>
            <Multiselect className={classes.textbox} */} 
              {/* // options={data}
              // displayValue="services"
              // onSelect={(view) => addService(view)} */}
            {/* />
            </th>

            <th>
              <label className={classes.title}>Labour Cost</label>
              <Select className={classes.textbox}></Select>
            </th>

            <th>
            <label className={classes.totalPrice}>Total Price:{totalPrice}</label></th>
              
            

          </tr> */}
      </table>
    </div>
  );
};

export default EstimationDetails;