import React from "react";
import carebeams from "../assets/carebeams.png"
import cupcoffee from "../assets/cupcoffee.png"
import coffeemaker from "../assets/coffeemaker.png"

const About = () => {


      const aboutinfo = [
            {image: carebeams, text: "Crafted with Care"},
            {image: cupcoffee, text: "Freshnes"},
            {image: coffeemaker, text: "Workaholic"},
      ]



      return(
            <section id="about" className="bg-[#AC704D] p-20">
              <div className="max-w-[1200px] mx-auto flex flex-col items-center items-center gap-20">
                  <div className="w-full flex items-start justify-between mt-30">
                    <div>
                        <h1 className="text-[#ECB98C] font-bold text-3xl">Premium & Brand-Focused</h1>
                    </div>
                  
                    <div>
                        <p className="text-[#ECB98C] w-[400px]">Sapura focuses on clean flavors, thoughtful roasting, and coffee made for those who value quality over hype.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-50 mb-40 place-items-center">
                        
                              {
                                    aboutinfo.map((pre, key) => {
                                          return(
                                          <div key={key} className="border-2 py-5 w-[400px] h-[300px] flex flex-col items-center justify-center gap-3 bg-[#D6A77E]">
                                                <img className="w-[200px] " src={pre.image} alt="beams" />
                                                <h1 className="text-2xl font-bold">{pre.text}</h1>  
                                          </div>                                           
                                          )
                                    })
                              }
                             
                        
                  </div>
              </div>
            </section>
      )
}

export default About