import axios from "axios"
import { useEffect, useRef, useState } from "react"
import classes from './SheetDisplay.module.css';



const ChittyManagers = () => {
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
    if(searchInpRef.current.value.length >= 3){
      const resp =productDetails.filter(data=> data.Name.includes(searchInpRef.current.value))
      setProductDetails([...resp])
    }
    else{
      setProductDetails(prodOrData)
    }
  }
  // const handleEdit=(i,prodId)=>{
  //   setStatus(false)
  //   setindexer(i)
  // }
  // const handleSave=(i,prodId)=>{
  //   console.log(prodId);
  //   setStatus(true)
  //   setindexer(i)
  //   // call the api by passing
  // }
  return (
    <div className={classes.profile}>
      <h3>EMPLOYEE DATA</h3>
      <input type="text" placeholder="Search your employee..." className="mt-5" ref={searchInpRef} onChange={handleSearch}/>
      <table class="table table-striped position-relative start-0">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col"><strong>NO</strong></th>
            <th scope="col"><strong>EMPCODE</strong></th>
            <th scope="col"><strong>NAME</strong></th>
            <th scope="col"><strong>EMAIL</strong></th>
            <th scope="col"><strong>PHONE NO</strong></th>
            <th scope="col"><strong>ADDRESS</strong></th>
            <th scope="col"><strong>EXPRIENCE</strong></th>
            <th scope="col"><strong>GENDER</strong></th>
            <th scope="col"><strong>QUALIFICATION</strong></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productDetails.map(function (object, i) {
            return <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{object.Empcode}</td>
              <td>{object.Name}</td>
              <td>{object.email}</td>
              <td>{object.phoneNo}</td>
              <td>{object.address}</td>
              <td>{object.exprience}</td>
              <td>{object.gender}</td>
              <td>{object.qualification}</td>
              {/* <td><input disabled={status || i != indexer} type="number" defaultValue={object.productQuantity}/></td> */}
              {/* <td>
               
                  {
                    (status || i != indexer) &&(
                      <button onClick={()=>{handleEdit(i)}}>Edit</button>
                    )
                   
                   
                  }
                  {
                    (!status && i == indexer) &&(
                      <button onClick={()=>{handleSave(i,object.id)}}>Save</button>
                    )
                   
                   
                  }
                  </td> */}
               
            </tr>

          })}
        </tbody>
      </table>
    </div>

  )

}
export default ChittyManagers
