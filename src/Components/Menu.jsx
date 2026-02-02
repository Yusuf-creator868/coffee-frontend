import React, { use, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom"
import { IoMenu } from "react-icons/io5";
import { X } from 'lucide-react';
import api from "../api";


const Menu = () => {

      // {name: "Coffee", to: "coffee"},
      //       {name: "Bakery", to: "bakery"},
      //       {name: "Tea", to: "tea"},
      //       {name: "Sweats", to: "sweats"},
      // ]

      const [men, setmen] = useState([])
      const [menus, setmenus] = useState([])



      useEffect(()=>{
            api.get('get_category/', {withCredentials: true})
            .then(res => {
                  setmen(res.data)
                  
            })
            .catch(err => {
                  console.log(err.message)
            })
      }, [])





      const [under, setunder] = useState("")
      const [isMobile, setisMobile] = useState(false)
      

      const button = (name) => {
            men.find(prev => prev.name === name) ? setunder(name) : null
      }
   

      const line = (underline) => 
           under === underline ? "underline" : null


      


      return(
            <section id="menu" className="bg-[#D4A276] p-10">
                  <div className="flex flex-col items-start space-y-10 max-w-[1300px]  mx-auto">
                        <div className="space-y-2">
                              <hr />
                              <h1 className="text-4xl font-bold">Our Products</h1>
                              <hr />
                        </div>

                        <div className="flex items-center justify-between w-full">

                           <div className="hidden md:flex items-center gap-20">
                              {men.map((prev, key) => {
                                    return(
                                          <div key={ key={key}}>
                                                <Link onClick={() => button(prev.name)} className={`text-2xl ${line(prev.name)}`} to={prev.slug || "coffee"}>{prev.name}</Link>
                                          </div>
                                    )
                              })}
                           </div>

                           <button onClick={() => setisMobile((pre) => !pre)} className="md:hidden p-2 text-foreground z-50">{isMobile ? <X size={24}/> : <IoMenu size={24} />}</button>

                           <div className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden',
                              
                              ${isMobile ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`
                              }>
                              <div className="flex flex-col space-y-8 text-xl">
                                    {/* {men.map((item, key) => (
                                          <Link key={key} to={item.slug} className="text-foreground/80 hover:text-primary" onClick={() => setisMobile(false)}>{item.name}</Link>
                                    ))} */}
                              </div>
                        </div>

                      
                           <a className="text-2xl font-bold hover:underline cursor-pointer">View All Menu</a>
                         

                        </div>

                        <hr className="w-full"/>
                        
                  </div>
                  <div className="mt-5 max-w-[1400px] mx-auto">
                        <Outlet/>
                  </div>
            </section>
      )
}

export default Menu