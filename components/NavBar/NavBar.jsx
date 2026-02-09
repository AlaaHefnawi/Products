import { useEffect, useState } from "react"
import profileimg from "./../../src/assets/profileimg.png"
import "./NavBar.css"
const NavBar = () => {

   const [user, setUser] = useState({})

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if(storedUser){
      const u = JSON.parse(storedUser)
      setUser({
        name: `${u.first_name} ${u.last_name}`,
        role: "Admin",
        profilePic: u.profile_image_url
      })
    }
  }, [])
  return (
    <div className="navbar">
      <h2 className="route">Products</h2>
      <div className="user">
        <img src={user.profilePic} alt=""/>
        <div className="userinfo">
          <p className="username">{user.name}</p>
          <p className="admin">{user.role}</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
