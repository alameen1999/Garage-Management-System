import Select from "react-select";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import classes from './EstimationDetails.module.css';

const options = [
  { value: "  two wheelr", label: "Two wheeler" },
  { value: "four wheeler", label: "four wheeeler" },
  { value: "LMV", label: "LMV" },
  { value: "HMV", label: "HMV" }
];

const EstimationDetails = () => {
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
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedService, setSelectedServices] = useState(0);
  const addService = (val) => {
    setSelectedServices(val);
    console.log(val.reduce((accumulator, service) => accumulator+service.price, 0))
    setTotalPrice(val.reduce((accumulator,service) => accumulator+service.price, 0));
  };

  return (
    <div>
      <table>
        <tr>
              <th>
              <label className={classes.title}>Enter Customer Name</label>
            <input className={classes.textbox} placeholder="Name"></input>
              </th>
           
         
            <th>
            <label className={classes.title}>Enter Vehicle Number</label>
            <input className={classes.textbox} placeholder="KL XX XXXX"></input>
            </th>
            
        
            <th>
            <label className={classes.title}>Select Vehicle Type</label>
            <Select className={classes.textbox} options={options}></Select>
          
            </th>
            </tr>
            

          <tr>
            <th>
            <label className={classes.title}>Enter Engine Number</label>
            <input className={classes.textbox} placeholder="Engine Number"></input>
            </th>
           
         
           <th>
           <label className={classes.title}>Enter Chase Number</label>
            <input className={classes.textbox} placeholder="Chase Number"></input>
           </th>
           
            <th>
            <label className={classes.title}>Select Services Available</label>
            <Multiselect className={classes.textbox}
              options={data}
              displayValue="services"
              onSelect={(view) => addService(view)}
            />
            </th>
            
         
         
        </tr>
        <tr>
            <th>
              <label className={classes.totalPrice}>Total Price:{totalPrice}</label></th>
              
         
          </tr>

          <tr>
          <th>
            <label className={classes.title}>Select Products Available</label>
            <Multiselect className={classes.textbox}
              // options={data}
              // displayValue="services"
              // onSelect={(view) => addService(view)}
            />
            </th>

            <th>
              <label className={classes.title}>Labour Cost</label>
              <Select className={classes.textbox}></Select>
            </th>

            <th>
            <label className={classes.totalPrice}>Total Price:{totalPrice}</label></th>
              
            

          </tr>
      </table>
    </div>
  );
};

export default EstimationDetails;