



import axios from "axios"
import { useEffect, useRef, useState } from "react"
import classes from './SheetDisplay.module.css';
import DataTable from "react-data-table-component";



const SheetDisplay = () => {
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/employee/displayemployee/${sessionStorage.getItem('userID')}`)
      .then(response => {
        setProductDetails(response.data)
        setOrgData(response.data)
      })
  }, []
  )
  const [prodOrData,setOrgData] = useState([])
  const [productDetails, setProductDetails] = useState([])
  const searchInpRef = useRef();
  // const [status,setStatus] = useState(true)
  // const [indexer,setindexer] = useState('')
  const handleSearch =()=>{
    if(searchInpRef.current.value.length >= 1){
      const resp =productDetails.filter(data=> data.Name.includes(searchInpRef.current.value))
      setProductDetails([...resp])
    }
    else{
      setProductDetails(prodOrData)
    }
  }
  const columns = [
    {
      name: "Employee COde",
      selector: (row) => row.Empcode,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNo,
    },

    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Experience",
      selector: (row) => row.exprience,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Qualification",
      selector: (row) => row.qualification,
    },
  ];

 
 
  
  return (
    <div className={classes.profile}>
      <h3>EMPLOYEE DATA</h3>
      <input type="text" placeholder="Search your employee..." className="mt-5" ref={searchInpRef} onChange={handleSearch}/>

      <DataTable columns={columns} data={productDetails} pagination />
      
    </div>

  )

}
export default SheetDisplay
