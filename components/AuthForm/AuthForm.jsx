import { Link } from "react-router-dom"
import "./AuthForm.css"
import uploadicon from "./../../src/assets/upload-icon.svg"
import { useState } from "react"


const AuthForm = ({form, title, subtitle, inputs, btn, text, link, changeData}) => {
    const [data , setData] = useState({})
    const dataHandle = (event) => {
        event.preventDefault()
        changeData(data)
    }
  return (
    <div className="authentication">
        <div className={`auth ${form}`}>
      <div className="heading">
        <h2>{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
      <form onSubmit={dataHandle}>
        {inputs?.map((input, index) => {
        return(
            <div key= {index} className="field">
            <label>{input.label}</label>
            {input.type === "file" ? (
            <label className="upload-box">
              <input type="file" hidden onChange={(event) => {setData({...data, [input.name] : event.target.files[0]})}} />
              <div className="upload-content">
                <img src={uploadicon} />
            </div>
            </label>
)           : (
            <input 
            type={input.type}
            placeholder={input.placeholder}
            required
            onChange={(event) => {setData({...data, [input.name] : event.target.value})}}
            />
)}
</div>
        )
      })}
        <button type="submit">{btn}</button>
      </form>
      <p className="account">{text}<Link to={link?.url} style = {{textDecoration: "none" ,color:"#4880FF"}}>{link?.content}</Link></p>
    </div>
    </div>
  )
}

export default AuthForm
