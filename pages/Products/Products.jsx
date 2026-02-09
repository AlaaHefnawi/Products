import { useEffect, useState } from "react"
import "./Products.css"
import axios from "axios"
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([])
  const [reload, setReload] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("https://vica.website/api/items", {
      headers : {
        Authorization : localStorage.getItem("token"),
        "Accept" : "application/json",
      }
    })
    .then(res => {
      setProducts(res.data)
    })
    .catch(err => console.log(err))
  }, [reload])
  const deleteHandle = (id) => {
    axios.delete(`https://vica.website/api/items/${id}`, {
      headers: {
        Authorization : localStorage.getItem("token"),
        Accept : "application/json"
      }
    })
    .then(res => { console.log(res)
      // setProducts(products.filter(p => p.id !== id));
      setReload(prev => !prev)})
    .catch(err => console.log(err))
  }
  const navHandle = (url) => {
    navigate(url)
  }
  return (
    <div className="products">
    <div className="head">
      <h1 className="title">Manage Products</h1>
      <button onClick={()=>navHandle("/dashboard/add")}>+    Add Products</button>
      </div>

       <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}$</td>
              <td>
                <img
                  src={product.image_url}  
                  className="product-img"
                  alt=""
                  
                />
              </td>
              <td className="actions">
                <button className="edit" onClick={()=>navHandle(`/dashboard/edit/${product.id}`)}><FaRegEdit className="icon" /></button>
                <button
                  className="delete"
                  onClick={() => deleteHandle(product.id)}
                  >
                  <RiDeleteBin6Line className="icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>



    </div>
  )
}

export default Products
