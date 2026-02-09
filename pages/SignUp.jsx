import { useEffect, useState } from "react"
import AuthForm from "../components/AuthForm/AuthForm"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const [data , setData] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    if (data.first_name){
      const user_name = data.email.split("@")[0];
    axios.post("https://vica.website/api/register" , {...data, user_name} , {
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "multipart/form-data"
      }
    })
    .then(res => {
    localStorage.setItem("token", `Bearer ${res.data.data.token}`)
    console.log(res)
    navigate("/dashboard")
  })
    .catch(err => console.log(err))


    }

  }, [data])
  const inputs = [
    {
        type: "text",
        placeholder: "First Name",
        name: "first_name",
        label: "First Name"
    },
    {
        type: "text",
        placeholder: "Last Name",
        name: "last_name",
        label: "Last Name"
    },
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
    },
    {
        type: "password",
        placeholder: "********",
        name: "password_confirmation",
        label: "Confirm"
    },
    {
      type: "file",
      name: "profile_image",
      label: "Profile Image"
    }
  ]
  return (
    <div>
      <AuthForm
      form= "signup"
      title= "Sign Up"
      subtitle= "Create an account to continue"
      inputs={inputs}
      btn= "Sign Up"
      text="Already have an account? "
      link={{url: "/", content: "Sign In"}}
      changeData={setData} />
    </div>
  )
}

export default SignUp
