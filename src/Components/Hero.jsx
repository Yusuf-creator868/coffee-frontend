import React from "react";
import coffee from "../assets/coffee.png"
import { PiCoffeeBeanFill } from "react-icons/pi";
import { LuWheat } from "react-icons/lu";

const Hero = () => {
      return(
            <div id="home" className="bg-[#8B5E34] pt-40 px-4">
            <section className="flex flex-col-reverse items-center justify-center md:flex-row  gap-50 max-w-[1400px] mx-auto">
                  
                  <div className="space-y-10 relative">
                        <div className="text-6xl font-bold space-y-8 text-[#1E1E1E]">
                              <h1>Where Coffee</h1>
                              <h1>Becomes</h1>
                              <h1>Ritual</h1>
                        </div>
                        
                        <p className="max-w-[400px] text-[#1E1E1E]">Precision-roasted coffee built on quality, consistency, and a deep respect for the craft.</p>
                        <div className="flex gap-10">
                              <button className="border-2 cursor-pointer px-8 py-4 bg-[#F3D5B5] rounded-[5px] text-black border-black py-3 px-5">Oreder Now</button>
                              <button className="border-2 cursor-pointer px-8 py-4 rounded-[5px] text-[#F3D5B5] border-[#F3D5B5] py-3 px-5">Explore More</button>
                        </div>
                        
                        <div className="opacity-10 -ml-40 rotate-12">
                              <PiCoffeeBeanFill size={200}/>
                        </div>

                  </div>

                  <div className="relative z-0 mb-30">
                        <div className="absolute left-[400px] bottom-[500px] opacity-10 overflow-hidden">
                              <PiCoffeeBeanFill size={200}/>
                        </div>
                        <img className="relative z-10 min-w-[400px]" src={coffee} alt="coffee" />
                        <div className="absolute opacity-10 left-[300px] -bottom-[150px]">
                              <LuWheat size={200}/>
                        </div>
                       
                  </div>

                
            </section>
            </div>
      )
}

export default Hero