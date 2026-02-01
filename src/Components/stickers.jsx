import React from "react";
import purecoffee from "../assets/purecoffee.png"
import bearcoffee from "../assets/bearcoffee.png"
import coffeepulse from "../assets/coffeepulse.png"
import braincoffee from "../assets/braincoffee.png"
import techcoffee from "../assets/techcoffee.png"
import gymcoffee from "../assets/gymcoffee.png"



const Stickers = () => {

      const stickers = [
            {sticker: purecoffee},
            {sticker: bearcoffee},
            {sticker: coffeepulse},
            {sticker: braincoffee},
            {sticker: techcoffee},
            {sticker: gymcoffee},
      ]



      return(
            <section className="bg-[#E6CCB2] p-20">
            <div className="max-w-[1400px] mx-auto py-20">
                  <div className="flex items-center gap-4">
                        <hr className="flex-1 border-t border-black" />
                        <div  className="whitespace-nowrap font-semibold text-3xl text-center">
                              <h1 >Cool</h1>
                              <h1>Srickers</h1>
                        </div>
                        <hr className="flex-1 border-t border-black"/>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 place-items-center gap-5">
                        {
                              stickers.map((pre, key) => {
                                    return(
                                                <div key={key} className="border-1 bg-[#EDE0D4] h-[400px] flex items-center">
                                                      <img className="object-cover" src={pre.sticker} alt="sticker" />
                                                </div>
                                    )
                              })
                        }
                      

                  </div>
            </div>
            </section>
      )
}

export default Stickers