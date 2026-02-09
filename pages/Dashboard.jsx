import SideBar from "../components/SideBar/SideBar"
import DashIcon from "./../src/assets/dashicon.svg?react"
import ProductsIcon from "./../src/assets/productsicon.svg?react"
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineWindow } from "react-icons/md";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
  const items = [
    {
      title: "Dashboard",
      icon: RiDashboard3Line,
      url: "/dashboard"
    },
    {
      title: "Products",
      icon: MdOutlineWindow,
      url: "/dashboard/products"
    }
  ]
  return (
    <div style={{background: "#F5F6FA"}}>
      <NavBar/>
      <SideBar logo="Stack" span="Dash" items={items}/>
      <Outlet/>
    </div>
    
  )
}

export default Dashboard
