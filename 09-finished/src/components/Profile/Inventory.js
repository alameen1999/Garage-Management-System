import axios from "axios"
import { useEffect, useRef, useState } from "react"
import classes from './UserProfile.module.css';



const Inventory = () => {
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/product/displayproduct/${sessionStorage.getItem('userID')}`)
      .then(response => {
        setProductDetails(response.data)
        setOrgData(response.data)
      })
  }, []
  )
  const [prodOrData,setOrgData] = useState([])
  const [productDetails, setProductDetails] = useState([])
  const searchInpRef = useRef();
  const [status,setStatus] = useState(true)
  const [indexer,setindexer] = useState('')
  const handleSearch =()=>{
    if(searchInpRef.current.value.length >= 3){
      const resp =productDetails.filter(data=> data.productName.includes(searchInpRef.current.value))
      setProductDetails([...resp])
    }
    else{
      setProductDetails(prodOrData)
    }
  }
  const handleEdit=(i,prodId)=>{
    setStatus(false)
    setindexer(i)
  }
  const handleSave=(i,prodId)=>{
    console.log(prodId);
    setStatus(true)
    setindexer(i)
    // call the api by passing 
  }
  return (
    <div className={classes.profile}>
      <input type="text" className="mt-5" ref={searchInpRef} onChange={handleSearch}/>
      <table class="table table-striped position-relative start-0">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col"><strong>NO</strong></th>
            <th scope="col"><strong>PRODUCT NAME</strong></th>
            <th scope="col"><strong>PRODUCT PRICE</strong></th>
            <th scope="col"><strong>PRODUCT QUANITY</strong></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productDetails.map(function (object, i) {
            return <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{object.productName}</td>
              <td>{object.productPrice}</td>
              <td><input disabled={status || i != indexer} type="number" defaultValue={object.productQuantity}/></td>
              <td>
                
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
                  </td>
                
            </tr>

          })}
        </tbody>
      </table>
    </div>

  )

}
export default Inventory