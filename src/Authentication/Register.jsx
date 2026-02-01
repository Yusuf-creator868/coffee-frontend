import {useState} from "react";
import { useAuth } from "../useAuth";
import {useNavigate} from "react-router-dom"

const Register = () => {

    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [Cpassword, setCpassword] = useState('')
    const {register_auth} = useAuth()
 
    const nav = useNavigate()

    const handlesubmit = async (e) => {
       e.preventDefault()
       try{
           await register_auth(username, email, password, Cpassword)
           alert("Registeration successful!")
           nav("/login")
       }catch(error){
           console.error(error.response?.data || error.message)
           alert("Registeration failed!")
       }
 };


      return(
            <div className="flex justify-center  h-screen bg-[#e9cba5] px-3">
            <div className="w-[500px] max-h-[500px] mt-[150px] p-6 bg-[#D1BB9E] rounded shadow-md mb-6">
                  <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
               <form onSubmit={handlesubmit}>
                  <label className="block mb-3">
                        <span className="text-sm font-medium">Username</span>
                        <input
                        name="username"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        className="mt-1 block w-full rounded-md border p-2 border-gray-200"
                        placeholder="yourusername"/>
                   </label>


        <label className="block mb-3">
        <span className="text-sm font-medium">Email</span>
        <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="mt-1 block w-full rounded-md border p-2 border-gray-200"
            placeholder="you@example.com"/>
        </label>


          <label className="block mb-3">
          <span className="text-sm font-medium">Password</span>
          <input
            name="password"
            type="password"
             value={password}
             onChange={(e) => setpassword(e.target.value)}
             className="mt-1 block w-full rounded-md border p-2 border-gray-200"
            placeholder="Password"
          />
          </label>


    <label className="block mb-4">
        <span className="text-sm font-medium">Confirm password</span>
        <input
            name="confirmPassword"
            type="password"
            value={Cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            className="mt-1 block w-full rounded-md border p-2 border-gray-200"
            placeholder="Repeat password"/>
    </label>
    <button
        type="submit"
        className="w-full py-2 rounded bg-[#584730] text-white font-semibold shadow hover:opacity-95 disabled:opacity-60 cursor-pointer">
            Create account
    </button>

        </form>


    <div className="mt-4 text-sm text-center text-gray-600">
        Already have an account? <a  href="/login" className="text-indigo-600 font-semibold">Log in</a>
    </div>
        </div>
      </div>
      )
}

export default Register