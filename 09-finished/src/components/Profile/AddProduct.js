import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dummy from '../../api/Dummy';
import Select from 'react-select';
import classes from './UserProfile.module.css';


const AddProduct = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  const productNameInputRef = useRef();
  const priceInputRef = useRef();
  const quantityInputRef = useRef();
  useEffect(() => {
    fetchData()
  }, []
  )




  const handleChange = value => {
    setSelectedValue(value);
  }
  const returntohome=()=>{


  }

  const submitHandler = (event) => {
    event.preventDefault();
    const prodDetails = {
      productName: productNameInputRef.current.value,
      productPrice: priceInputRef.current.value,
      categoryId: selectedValue.value,
      productQuantity: quantityInputRef.current.value,
      userId:sessionStorage.getItem('userID')
    }
    Dummy.post('addproduct/',prodDetails).then(res=>{
      console.log(res);
      alert(JSON.stringify(res.data.message))
    })
  }
  const fetchData = async () => {
    const albums = await (await Dummy.get('category')).data
    setItems(albums.slice(0, 8).map((data) => {
      console.log();
      return { value: data.id, label: data.categoryname }
    }))
    setSelectedValue(items[0])
  }

  return (
    <div className={classes.profile}>
      <h3>ADD STOCK DETAILS</h3>
      <div className='mx-auto p-5 container'>
          <form onSubmit={submitHandler} className="" >
            <div class="form">
              <div class=" mb-3">
                <label for="validationCustom01">PRODUCT CATEGORY</label>
                <Select
                  value={selectedValue}
                  onChange={handleChange}
                  options={items}
                  required
                />
              </div>
              <div class=" mb-3">
                <label for="validationCustom01">PRODUCT NAME</label>
                <input type="text" class="form-control" id="validationCustom01" required ref={productNameInputRef} />

              </div>
              <div class="mb-3">
                <label for="validationCustom02">PRICE</label>
                <input type="number" class="form-control" id="validationCustom02" required ref={priceInputRef} />

              </div>
              <div class="mb-3">
                <label for="validationCustomUsername">QUANITY</label>
                <div class="input-group">
                  <div class="input-group-prepend">

                  </div>
                  <input type="number" class="form-control" id="validationCustomUsername"  required ref={quantityInputRef} />
                  <div class="invalid-feedback">

                  </div>
                </div>
              </div>
            </div>


            <button class="btn btn-warning" >Add product</button>
             
            {/* <button class="btn btn-success" onClick={returntohome} >Back To Home</button> */}
          </form>
        
      </div>
    </div>
  )

}

export default AddProduct;