import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdFeedback } from "react-icons/md";

const Testimonials = () => {

      const scrollRef = useRef(null);
      const scrallAmount = 1155

      const scrall = (direction) => {
            if(scrollRef.current){
                  if(direction === 'left'){
                    scrollRef.current.scrollLeft -= scrallAmount;
                  }else{
                    scrollRef.current.scrollLeft += scrallAmount;
                  }
                }
      }

      return(
            <section className="bg-[#D4A276]">
                  <div className="max-w-[1400px] mx-auto h-[700px] flex flex-col items-center justify-center space-y-20">
                        <h1 className="text-4xl font-bold">What others say?</h1>
                      <div className="flex items-center gap-5 max-full max-w-[1155px]">

                        <FaArrowLeft onClick={() => scrall("left")} size={50} className="p-4 border-2 bg-[#D1BB9E]"/>

                        <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth scrolling gap-3 p-4 min-w-[400px] max-w-[1100px]">
                       
                              <div className="shrink-0 max-w-[300px] border-2 flex flex-col items-start justify-center p-4 space-y-5 bg-[#F3D5B5] rounded-[10px]">
                                    <div><MdFeedback /></div>
                                    <div>
                                          <h1 className="">"The Sapura coffee is smooth, tastes good, and is strong. It's really great tasting coffee".</h1>
                                    </div>
                                    <div className="flex items-center gap-5">
                                          <ul class="list-disc pl-5">
                                              <li>Mr.Djosef</li>
                                          </ul>
                                    </div>
                              </div>
                              <div className="shrink-0 max-w-[300px] border-2 flex flex-col items-start justify-center p-4 space-y-5 bg-[#F3D5B5] rounded-[10px]">
                                    <div><MdFeedback /></div>
                                    <div>
                                          <h1 className="">"The Sapura coffee is smooth, tastes good, and is strong. It's really great tasting coffee".</h1>
                                    </div>
                                    <div className="flex items-center gap-5">
                                          <ul class="list-disc pl-5">
                                              <li>Mr.Djosef</li>
                                          </ul>
                                    </div>
                              </div>
                              <div className="shrink-0 max-w-[300px] border-2 flex flex-col items-start justify-center p-4 space-y-5 bg-[#F3D5B5] rounded-[10px]">
                                    <div><MdFeedback /></div>
                                    <div>
                                          <h1 className="">"The Sapura coffee is smooth, tastes good, and is strong. It's really great tasting coffee".</h1>
                                    </div>
                                    <div className="flex items-center gap-5">
                                          <ul class="list-disc pl-5">
                                              <li>Mr.Djosef</li>
                                          </ul>
                                    </div>
                              </div>
                        
                              
                        </div>

                        <FaArrowRight onClick={() => scrall("right")} size={50} className="p-4 border-2 bg-[#D1BB9E]"/>
                    </div>

                  </div>
            </section>
      )
}

export default Testimonials