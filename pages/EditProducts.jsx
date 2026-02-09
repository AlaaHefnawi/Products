import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm/ProductForm'
import uploadicon from "./../src/assets/Upload-icon.svg"


const EditProducts = () => {
    const [inputs, setInputs]= useState([])
    const [data, setData] = useState({})
    const params = useParams()
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get(`https://vica.website/api/items/${params.id}`, {
            headers:{
                Authorization : localStorage.getItem("token"),
                Accept : "apploication/json"
            }
        })
        .then(res => {setInputs([
        {
            type: "text",
            placeholder: "name",
            name: "name",
            value: res.data.name,
            label: "Product Name"
        },
        {
            type: "text",
            placeholder: "price",
            name: "price",
            value: res.data.price,
            label: "Price"

        },
        {
            type: "file",
            name: "image",
            value: res.data.image_url
        },
    ])
        console.log(res)})
    .catch(err => console.log(err))
    },[]) 
    useEffect(() => {
        axios.post(`https://vica.website/api/items/${params.id}`, {...data, "_method" : "PUT"}, {
            headers : {
                Authorization : localStorage.getItem("token"),
                "Accept" : "apploication/json",
                "Content-Type" : "multipart/form-data"
            }

        })
        .then(res => navigate("/dashboard/products"))
        .catch(err => console.log(err))
    },[data])
  return (
    <div>
    <ProductForm title="Add Product" inputs={inputs} btn="Save" src={uploadicon} changeData= {setData} />
    </div>
  )
}

export default EditProducts
