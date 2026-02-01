import React, { useEffect, useState } from "react";
import lungo from "../assets/lungo.jpg"
import dalgona from "../assets/dalgona.jpg"
import { RiStarSFill } from "react-icons/ri";
import iced from "../assets/iced.webp"
import mocha from "../assets/mocha.jpg"
import { useOutletContext, useParams } from "react-router-dom";
import api, { MAIN_URL } from "../api";


const Coffee = () => {

      const [starts, setstarts] = useState(5)
      const {slug} = useParams()
      const activeSlug = slug || "coffee"
      const [menus, setmenus] = useState([])
     

      useEffect(()=>{

            api.get(`get_menu/${activeSlug}`, {withCredentials: true})
            .then(res => {
                  setmenus(res.data.menues)
                  console.log(res.data.menues)
            })
            .catch(err => {
                  console.log(err.message)
            })
      }, [activeSlug])

      if (!menus.length) return <p>No Products Yet</p>

     
           
   


      return(
            <section className="w-full">
                  <div className="grid grid-cols-1 justify-items-center [@media(min-width:673px)_and_(max-width:978px)]:grid-cols-2 [@media(min-width:973px)_and_(max-width:1271px)]:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
                        {menus.map((prev, key) => {
                              return(
                                    <div key={key} className="w-[300px] bg-[#FFF1DD] rounded-2xl p-4 shadow-md">
      
                                    {/* Image wrapper */}
                                    <div className="relative bg-[#F3D6B8] rounded-xl p-3">
                                      
                                      {/* Badge */}
                                      <span className="absolute top-0 left-0 bg-[#C99763] text-black text-sm font-semibold px-4 py-1 rounded-[5px]">
                                        Order
                                      </span>
                              
                                      {/* Image */}
                                      <img
                                        src={`${MAIN_URL}${prev.image}`}
                                        alt="Dalgona Coffee"
                                        className="w-full h-[260px] object-cover rounded-xl"
                                      />
                                    </div>
                              
                                    {/* Content */}
                                    <div className="mt-4 space-y-3">
                                      <h2 className="text-2xl font-bold text-black">
                                        {prev.name}
                                      </h2>
                              
                                      <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold">${prev.cost}</span>
                              
                                        <button className="border border-black rounded-xl cursor-pointer px-5 py-2 font-medium hover:bg-black hover:text-white transition">
                                          Add to Cart
                                        </button>
                                      </div>
                                    </div>
                              
                                  </div>
                              )
                        })}
                        

                  </div>
            </section>
      )
}

export default Coffee