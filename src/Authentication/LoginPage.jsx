import {useState} from "react";
import { useAuth } from "../useAuth";

const Login = () => {

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const {login_auth} = useAuth()
  // const nav = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault();
    login_auth(username, password)
  }


      return(
            <div className="flex justify-center items-center h-screen bg-[#e9cba5]">
            <form onSubmit={handlesubmit} className="bg-[#D1BB9E] p-6 rounded shadow w-80">
              <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
      
              <input
                type="text"
                name="username"
                placeholder="Name"
                onChange={(e) => setusername(e.target.value)}
                value={username}
                className="border p-2 mb-3 w-full rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
                className="border p-2 mb-3 w-full rounded"
              />
      
              <button type="submit" className="bg-[#584730] text-white px-4 py-2 rounded w-full cursor-pointer">
                Login
              </button>
      
              <h2>Don't have an account? <a href="/register" className="text-indigo-600 font-semibold">Register</a></h2>
            </form>
          </div>
      )
}

export default Login