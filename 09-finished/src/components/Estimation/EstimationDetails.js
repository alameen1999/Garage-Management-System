
import classes from "./EstimationDetails.module.css";
import Select from "react-select";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactToPrint from 'react-to-print'
import { format } from 'date-fns'
const EstimationDetails = () => {
  const componentRef=useRef()
  const [name, setName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [vehicleno, setVehicleno] = useState("");
  const [vehicletype, setVehicletype] = useState("");
  const [engineno, setEngineno] = useState("");
  const [selectedValue, setSelectedValue] = useState(null)
  const [chaseno, setChaseno] = useState("");
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [items, setItems] = useState([])
  const [selectedItem, setselectedItem] = useState('');
  const [type, setType] = useState([{ value: "product", label: "Product" }, { value: "service", label: "Service" }])
  const qty = useRef();
  const [total, setTotal] = useState(0)
  const [estimationdate, setEstimationdate] = useState("");

  const handleItmRemove = (type, ind) => {
    if (type == "product") {
      let res = [...selectedProducts]
      res.splice(ind, 1);
      setSelectedProducts(res)
      // findSum();
      // console.log(res,"res");
    }
    else {
      let res = [...selectedServices]
      res.splice(ind, 1);
      setSelectedServices(res)
      // findSum();

    }
  }
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/estimate/getestimateproducts/')
      .then(res => {
        setProducts(res.data)
      })
    axios.get('http://127.0.0.1:8000/estimate/getservices/')
      .then(res => {
        setServices(res.data)
      })
  }, [])
  
  const handleSelectedItems = value => {
    setselectedItem(value)
  }
  const handleChange = value => {
    setSelectedValue(value);
    setselectedItem('')
    if (value.value == 'product') {
      setItems(products.map(data => {
        return { label: `${data.productName} (InStock: ${data.productQuantity})`, value: data }
      }))
    }
    else {
      setItems(services.map(data => {
        return { label: data.services, value: data }
      }))
    }
  }
  const handleAdd = () => {
    if (selectedValue.value == "product") {
      if (selectedItem.value) {
        if (qty.current.value == 0 || qty.current.value == '' || qty.current.value == null) {
          alert("Add quantity")
        }
        else {
          let data = {
            estimate_product_name: selectedItem.value.productName,
            estimateProductsId: selectedItem.value.id,
            productQuanity: parseInt(qty.current.value),
            productPrice: selectedItem.value.productPrice * qty.current.value
          }
          if (selectedProducts.length == 0) {
            setSelectedProducts([data])
            // findSum();
          }
          else {
            let ind = selectedProducts.findIndex(data => data.estimateProductsId == selectedItem.value.id)
            if (ind == '-1') {
              setSelectedProducts([...selectedProducts, data])
              // findSum();
            } else {
              alert("Product Already Added")
            }


          }

        }
      }
      else {
        alert("Add Product")
      }

    }
    else {
      if (selectedItem.value) {
        let data = {
          estimate_service_name: selectedItem.value.services,
          estimateServiceId: selectedItem.value.id,
          estimatePrice: selectedItem.value.price
        }
        if (selectedServices.length == 0) {
          setSelectedServices([data])
          // findSum();
        }
        else {
          let ind = selectedServices.findIndex(data => data.estimateServiceId == selectedItem.value.id)
          if (ind == '-1') {
            setSelectedServices([...selectedServices, data])
            // findSum();
          } else {
            alert("Service Already Added")
          }

        }

      }
      else {
        alert("Add Service")
      }
    }

  }
  const findSum = () => {
    let pSum = selectedProducts.reduce((accumulator, currentValue) => accumulator + currentValue.productPrice, 0)
    let sSum = selectedServices.reduce((accumulator, currentValue) => accumulator + JSON.parse(currentValue.estimatePrice), 0)
    console.log("psum", pSum, "SSum", sSum);
    setTotal(pSum + sSum)
  }
  const submitHandler = () => {
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
      .catch((err) => alert("Invalid data", err.message))

  }

  const addestimatedetails=()=>{
    
    axios.post("http://127.0.0.1:8000/estimate/addestimate/",{
      vehicleNumber: vehicleno,
      date:format(estimationdate, 'yyyy-MM-dd'),
      cost:selectedProducts.reduce((accumulator, currentValue) => accumulator + currentValue.productPrice, 0) + selectedServices.reduce((accumulator, currentValue) => accumulator + JSON.parse(currentValue.estimatePrice), 0),
      status:false,
      userId: JSON.parse(sessionStorage.getItem("userID")),
      products:selectedProducts,
      Services:selectedServices
    })
    .then((res) =>{
      axios.put("http://127.0.0.1:8000/estimate/updateestimateproducts/",{
        products:selectedProducts
        
      })

      alert("estimate convert to job card", res.data.message)
    })

  }
 
  return (
    <div className={classes.profile}>
      <h3>Register New Customer</h3>
      <h6 className={classes.fields}>All fields are mandatory</h6>
      <div className="mx-auto">
        <div className="row row-cols-lg-3 row-cols-sm-1 ">
          <div>
            <label className={classes.title}>Enter Customer Name</label>
            <input
              className={classes.textbox}
              placeholder="Name" value={name}
              onChange={(event) => setName(event.target.value)}></input>
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
        <button className="mt-5 btn btn-danger" onClick={submitHandler} >Submit</button>
      </div>

      <div className="row row-cols-lg-3 row-cols-sm-1">
        <div className="col ">

          <label className={classes.title}> Select Date of Estimation</label>
          <DatePicker
            className={classes.textbox}
            selected={estimationdate}
            onChange={(date) => setEstimationdate(date)}
            dateFormat="yyyy-MM-dd"
          />

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

      <div className="row row-cols-lg-4 row-cols-sm-1 ms-5">
        <div >
          <label className={classes.title}>select type</label>
          <Select

            value={selectedValue}
            onChange={handleChange}
            options={type}
            required
          />
        </div>
        <div>
          <label className={classes.title}>select the item</label>
          <Select
            value={selectedItem}
            onChange={handleSelectedItems}
            options={items}
            required
          />
        </div>
        {
          selectedValue?.value == 'product' ? <div>
            <label className={classes.title}>Enter Quantity</label>
            <input
              className={classes.textbox}
              required
              type="number"
              defaultValue='1'
              ref={qty}
            ></input>
          </div> : <div></div>
        }
        <div>
          <button className="mt-5 btn btn-success" onClick={handleAdd}>Add </button>
        </div>
      </div>
      <div ref={componentRef}>
        <table class="table mt-3 container" >
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Label</th>
              <th scope="col">Qty</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody >
            {
              selectedProducts.map((data, i) => {
                return <tr >
                  <th scope="row">Product</th>
                  <td>{data?.estimate_product_name}</td>
                  <td>{data?.productQuanity}</td>
                  <td>{data?.productPrice}</td>
                  <td className="btn btn-danger text-danger" onClick={(e) => { handleItmRemove("product", i) }}>X</td>
                </tr>
              })


            }
            {
              selectedServices.map((data, i) => {
                return <tr>
                  <th scope="row">Service</th>
                  <td>{data?.estimate_service_name}</td>
                  <td>1</td>
                  <td>{data?.estimatePrice}</td>
                  <td className="btn btn-danger mouse-pointer text-danger" onClick={(e) => { handleItmRemove("services", i) }}>X</td>
                </tr>
              })
            }


          </tbody>
        </table>
      
      <div className="row">
        <h5 className="text-right">Total: {selectedProducts.reduce((accumulator, currentValue) => accumulator + currentValue.productPrice, 0) + selectedServices.reduce((accumulator, currentValue) => accumulator + JSON.parse(currentValue.estimatePrice), 0)}</h5>
      </div>
      </div>
      <div>
      <ReactToPrint trigger={() => (
        <button class="btn btn-warning">PRINT ESTIMATION</button>
      )}
      content={() => componentRef.current} />
      </div>
      <div className="position-absolute end-0">
        
        <button className="btn btn-success "  onClick={addestimatedetails}>CONVERT TO JOBCARD</button>
      </div>
      
    </div>
  )
}

export default EstimationDetails;


