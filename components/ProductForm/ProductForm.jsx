import { useState } from "react"
import "./ProductForm.css"

const ProductForm = ({title , inputs , src , btn, changeData}) => {
    let data = inputs[0]?.value ? {
        name : inputs[0].value,
        price : inputs[1].value
    } : {}
        const dataHandle = (event) => {
            event.preventDefault()
            changeData(data)
        }
  return (
    <div className="form">
      <h1>{title}</h1>
      <form onSubmit={dataHandle}>
              {inputs?.map((input, index) => {
              return(
                  <div key= {index} className="field">
                  <label>{input.label}</label>
                  {input.type === "file" ? (
                  <label className="upload-box">
                    <input type="file" hidden onChange={(event) => {data={...data, [input.name] : event.target.files[0]}}} />
                    <div className="upload-content">
                      <img src={
                      data[input.name]
                        ? URL.createObjectURL(data[input.name]) 
                        : input.value || src 
                    } />
                  </div>
                  </label>
      )           : (
                  <input 
                  type={input.type}
                  placeholder={input.placeholder}
                  defaultValue={input.value}
                  required
                  onChange={(event) => {data={...data, [input.name] : event.target.value}}}
                  />
      )}
      </div>
              )
            })}
              <button type="submit">{btn}</button>
            </form>
    </div>
  )
}

export default ProductForm
