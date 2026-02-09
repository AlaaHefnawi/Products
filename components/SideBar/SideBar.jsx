
import { NavLink, useNavigate } from "react-router-dom"
import logouticon from "./../../src/assets/logouticon.png"
import axios from "axios"
import "./SideBar.css"

const SideBar = ({logo, span, items}) => {
    const navigate = useNavigate()
    const logoutHandle= () => {
        axios.post("https://vica.website/api/logout", null, {
            headers: {
                Authorization : localStorage.getItem("token"),
                Accept : "application/json"
            }
        })
        .then(res => {
            console.log(res.data)
            localStorage.removeItem("token")
            navigate("/")
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="sidebar">
      <div className="first-sec">
        <h1 className="logo"><span>{span}</span>{logo}</h1>
        <ul>
        {items.map((item, index) => {
            const Icon = item.icon;
            return(
          <li key={index}>
             <NavLink
            to={item?.url}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            >
                <Icon className="icon" />    
                {item?.title}
                </NavLink>
          </li>
        )})}
        </ul>
      </div>
      <button onClick={logoutHandle}><img src={logouticon} alt="" /> Logout </button>
    </div>
  )
}

export default SideBar
