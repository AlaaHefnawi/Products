import { useEffect, useState } from "react"
import AuthForm from "../components/AuthForm/AuthForm"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
  const navigate = useNavigate()
  const [data , setData] = useState({})
  useEffect(() => {
    if(data.email){
      axios.post("https://vica.website/api/task-login", data, {
        headers: {
          "Accept" : "application/json",
          "Content-Type" : "application/json"
        }
      })
      .then(res => {
        localStorage.setItem("token", `Bearer ${res.data.token}`)
        localStorage.setItem("user", JSON.stringify(res.data.user))
        console.log(res)
        navigate("/dashboard")
      })
      .catch(err => console.log(err))
    }
  }, [data])
  const inputs = [
    {
        type: "email",
        placeholder: "Email",
        name: "email",
        label: "Email"
    },
    {
        type: "password",
        placeholder: "********",
        name: "password",
        label: "Password"
    }
  ]
  return (
    <div>
      <AuthForm
       form="signin"
       title= "Sign In"
       subtitle= "Please enter your email and password to continue"
       inputs={inputs}
       btn= "Sign In"
       text="Don't have an account? "
       link={{url: "/signup", content: "Sign Up"}}
       changeData={setData} />
    </div>
  )
}

export default SignIn
