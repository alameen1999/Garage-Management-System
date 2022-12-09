import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dummy from '../../api/Dummy';
import Select from 'react-select';
import classes from './Addproduct.module.css';


const AddProduct = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  const [selectedFile, setState] = useState(null);
  // On file select (from the pop up)
  const onFileChange = event => {
    // Update the state
    setState(event.target.files[0]);
  };


  const onFileUpload = (e) => {
    e.preventDefault();
    setState(e.target.files);

    const formData = new FormData();
    formData.append('productdetails', selectedFile);
    fetch('http://127.0.0.1:8000/product/excelproductupload/', { method: 'post', body: formData })
      .then(res => {
        if (res.ok) {
          console.log(res.data);
          alert("File uploaded successfully.")
        }
      });
  };


  const fileData = () => {
    if (selectedFile) {
      return (

        <div className={classes.detailsShown}>
          <h6>File Details:</h6>
          <p>File Name: {selectedFile.name}</p>
          <p>
            Last Modified:{" "}
            {selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />

          <h6>Choose before Pressing the Upload button</h6>


        </div>
      );
    }
  };



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
  const returntohome = () => {


  }

  const submitHandler = (event) => {
    event.preventDefault();
    const prodDetails = {
      productName: productNameInputRef.current.value,
      productPrice: priceInputRef.current.value,
      categoryId: selectedValue.value,
      productQuantity: quantityInputRef.current.value,
      userId: sessionStorage.getItem('userID')
    }
    Dummy.post('addproduct/', prodDetails).then(res => {
      console.log(res);
      alert(JSON.stringify(res.data.message))
    })
  }
  const fetchData = async () => {
    const albums = await (await Dummy.get('/category')).data
    setItems(albums.slice(0, 8).map((data) => {
      console.log();
      return { value: data.id, label: data.categoryname }
    }))
    setSelectedValue(items[0])
  }

  return (
    <section className={classes.manage}>
      <h3>ADD STOCK DETAILS</h3>


      <div className={classes.wrap}>

        {/* upload return statement */}
        <div className={classes.ameen}>

          {/* <h1 className={classes.header}>
                    Employee Data
                </h1> */}
          <div className={classes.upload}>
            <h4>
              Upload product details
            </h4>
            <div>

              <br></br>
              <input type="file" onChange={onFileChange} />
              <button onClick={onFileUpload}>
                Upload!

              </button>
            </div>


            <div className={classes.filedata}>{fileData()}</div>

          </div>
        </div>

        <div>
          <div class="container">
            <div class="row justify-content-center">
              <div id='box' className=' col-md-offset-6 text-black border shadow-lg p-5 '>
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
                      <input type="text" class="form-control bg-light " id="validationCustom01" required ref={productNameInputRef} />

                    </div>
                    <div class="mb-3">
                      <label for="validationCustom02">PRICE</label>
                      <input type="number" class="form-control bg-light" id="validationCustom02" required ref={priceInputRef} />

                    </div>
                    <div class="mb-3">
                      <label for="validationCustomUsername">QUANITY</label>
                      <div class="input-group">
                        <div class="input-group-prepend">

                        </div>
                        <input type="number" class="form-control bg-light" id="validationCustomUsername" required ref={quantityInputRef} />
                        <div class="invalid-feedback">

                        </div>
                      </div>
                    </div>
                  </div>


                  <button class="btn btn-success" >Add product</button>

                  {/* <button class="btn btn-success" onClick={returntohome} >Back To Home</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default AddProduct;