import React from "react";
import { FaPhoneAlt, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPinterest } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import {MapContainer, Marker, TileLayer, Popup} from "react-leaflet"
import {Icon} from "leaflet"
import "leaflet/dist/leaflet.css"
import location from "../assets/placeholder.png"


const Footer = () => {

      const marks = [
            {
              geocode: [41.18, 69.16],
              popUp: "Hello Tashken city"
            },
            {
              geocode: [41.311286, 69.279755],
              popUp: "Hello Amir Temur square"
            },
            {
              geocode: [41.325224, 69.240328],
              popUp: "Hello Chorsu"
            },
      
          ]
      
          const custom = new Icon({
            iconUrl: location,
            iconSize: [30, 30]
          })



      return(
            <footer id="contact" className="bg-[#BC8A5F]">
                  <div className="max-w-[1200px] mx-auto py-20 flex items-center justify-center gap-50">

                        {/* Contact info */}
                        <div className="space-y-10">
                              <h1 className="text-4xl font-bold">Contact us</h1>
                              <div className="flex items-center gap-5">
                                    <FaPhoneAlt size={30}/>
                                    <h1 className="text-2xl">(321)562-57420</h1>
                              </div>
                              <div className="flex items-center gap-5">
                                    <MdEmail size={30}/>
                                    <h1 className="text-2xl">sapura@gmail.com</h1>
                              </div>
                              <div className="space-y-7">
                                    <h1 className="text-3xl ">Follow us</h1>
                                    <div className="flex items-center gap-5">
                                          <FaPinterest  size={30}/>
                                          <FaInstagramSquare size={30}/>
                                          <FaYoutube size={30}/>
                                          <AiFillTikTok size={30}/>
                                    </div>
                              </div>
                        </div>


                        {/* Map */}
                        <div>
                        <h1 className="text-2xl font-bold my-5">Map</h1>
                  <MapContainer center={[41.2982, 69.2385 ]} zoom={13}>
                      <TileLayer 
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                      />
                      {marks.map((marker, index)=> (<Marker key={index} position={marker.geocode} icon={custom}>
                          <Popup>
                            {marks.popUp}
                            <h1>Hello</h1>
                          </Popup>
                      </Marker>))}
                  </MapContainer>

                        </div>
                       
                  </div>
                  <div>
                        <hr className="font-bold"/>
                        <h1 className="text-center text-[20px] text-[#807171] font-bold py-5">Created:2026 Djosef</h1>
                  </div>
             
            </footer>
      )
}

export default Footer