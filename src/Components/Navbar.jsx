import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { X } from 'lucide-react';
import { useAuth } from "../useAuth";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../api";
import logo from "../assets/logo.png"


const Navbar = () => {
      const [isMobile, setisMobile] = useState(false)

      const {Auth, setAuth} = useAuth()
      const usenav = useNavigate()

      const logoutbutton = () => {
            const success = logout()
            if (success){
                  setAuth(false)
                  localStorage.removeItem("username")
                  usenav("login");
            }
      }

      const nav = [
            {name: "Home", href: "#home"},
            {name: "About us", href: "#about"},
            {name: "Menu", href: "#menu"},
            {name: "Contact", href: "#contact"},
      ]


      return(
            <nav className="flex items-center justify-between px-25 py-2 bg-[#BC8A5F] z-10 fixed w-full">
                  <img className="w-[110px] " src={logo} alt="LOGO" />
                  <div className="hidden md:flex items-center gap-10">
                        {/* {nav.map((prev, key) => {
                              return(
                                    <a className="text-[#F3D5B5]" key={key} href={prev.href}>{prev.name}</a>
                              )
                        })} */}
                  </div>
                  {
                        Auth ? 
                        <div className="flex items-center gap-5">
                              <h1>Hi, {localStorage.getItem('username')}</h1>
                              <a href="profile">Profile</a>
                              <button className="cursor-pointer bg-[#8A5A44] text-gray-300 px-5 py-3 rounded-[5px]" onClick={logoutbutton}>Logout</button>
                        </div>
                         : 
                        <a href="login" className="cursor-pointer bg-[#8A5A44] text-gray-300 px-5 py-3 rounded-[5px]">Login</a>
                  }
                   

                  <button onClick={() => setisMobile((prev) => !prev)} className="md:hidden p-2 z-50">{isMobile ?  <X size={24}/> : <IoMenu size={24}/> }</button>
                  <div className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMobile ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

                              <div className="flex flex-col space-y-8 text-xl">
                                    {/* {nav.map((item, key) => (
                                          <a key={key} href={item.href} className="text-foreground/80 hover:text-primary" onClick={() => setisMobile(false)}>{item.name}</a>
                                    ))} */}
                              </div>

                  </div>

            </nav>
      )
}

export default Navbar