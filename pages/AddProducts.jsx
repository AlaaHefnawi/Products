import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm/ProductForm'
import uploadicon from "./../src/assets/upload-icon.svg"
import { useNavigate } from 'react-router-dom'

const AddProducts = () => {
    const [data, setData]= useState({})
    const navigate = useNavigate()
    useEffect(()=> {
        if (data.name){
            axios.post("https://vica.website/api/items", data, {
            headers: {
                Authorization: localStorage.getItem("token"),
                "Accept" : "application/json",
                "Content-Type" : "multipart/form-data"
            }
        })
        .then(res => {setData(res.data)
            navigate("/dashboard/products")
        })
        .catch(err => console.log(err))
        }
    },[data])
    const inputs = [
        {
            type: "text",
            placeholder: "name",
            name: "name",
            label: "Product Name"
        },
        {
            type: "text",
            placeholder: "price",
            name: "price",
            label: "Price"

        },
        {
            type: "file",
            name: "image",
        },
    ]
  return (
    <div>
      <ProductForm title="Add Product" inputs={inputs} btn="Save" src={uploadicon} changeData= {setData} />
    </div>
  )
}

export default AddProducts
