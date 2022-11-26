import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dummy from '../../api/Dummy';
import Select from 'react-select';


const AddProduct = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState('');
  const [selectedValue,setSelectedValue] = useState(null);

  useEffect(() => {
  fetchData()   },[]
  )
 

   

   const handleChange = value => {
    setSelectedValue(value);
   }

   const fetchData = async() => {
     const albums = await (await Dummy.get('category')).data
     setItems(albums.slice(0,8).map((data) => {
      console.log();
      return {value:data.id,label:data.categoryname}
     }))
     setSelectedValue(items[0])
   }

   return (
    <div className='container'>
      <h1>ADD STOCK DETAILS</h1>
      <Select
        value={selectedValue}
        onChange={handleChange}
        options={items}
      />
    </div>
   )

}

export default AddProduct;