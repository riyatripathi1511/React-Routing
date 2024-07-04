// import React,  { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
export default function Login() {
  const [email, setEmail] = useState(" ")
  const [password, setPassword] = useState(" ")
  const[emailWarning,setEmailWarning] = useState()
  const[passwordWarning,setPasswordWarning] = useState()

  const navigate = useNavigate()
  // const location = useLocation()
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  if(email=="riyatripathi123@gmail.com" && password=="universe420") {
     navigate("/home",{state:(email)})
  }
  if(password==" "){
    setPasswordWarning(true)
  }else if(password != "universe420"){
    alert("Wrong credentials")
  }
  return (
    <div className="d-flex p-5 m-8 text-center justify-content-center h-100vh">
     <form className="bg-warning">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={() => setEmail(target.value)}/>
    {emailWarning && <div className="text-danger">Email is required</div>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password </label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={() => setEmail(target.e.value)}/ >
    {passwordWarning && <div className="text-danger">Password is required</div>}
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={() => handleSubmit()}>Submit</button>
</form>
</div>
  )
}

