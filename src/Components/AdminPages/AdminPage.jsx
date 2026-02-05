import {useEffect, useState} from "react";
import api from "../../api";
import { MAIN_URL } from "../../api";
import { useAsyncError } from "react-router-dom";


const AdminPage = () => {

      const [category, setcategory] = useState([])

      const [form, setForm] = useState({
            choose: "",
            image: "",
            name: "",
            cost: "",
      })

      const [postcategory, setpostcategory] = useState({category: ""})


      // useEffect(() => {
      //       if (category.length > 0) {
      //         setForm(prev => ({ ...prev, choose: category[0].id }));
      //       }
      //     }, [category])  category[0]?.id ||

      


      // Getting category
      useEffect(function(){
            api.get("get_category/", {
                  withCredentials: true
            } )
            .then(
                  res => {
                        setcategory(res.data)
                        console.log(res.data)
                  }
            )
            .catch(err => {
                  console.log(err.message)
              })
      }, [])


      

      const handleCategorySubmit = () => {
            api.post('create_category/', {name: postcategory.category}, {withCredentials: true})
            alert("Created successfully")
            setpostcategory({category: ""})
      }




      const handleSubmit = (e) => {
            e.preventDefault();

                  const formData = new FormData();
                        formData.append("choose", form.choose);
                        formData.append("name", form.name);
                        formData.append("cost", form.cost);
                        formData.append("image", form.image);

            api.post("create_menu/", formData, { 
                  withCredentials: true
            })
            .then(res => {
                  alert("Created successfully")
                  setForm({choose: "", image: "", name: "", cost:""})
                  console.log(form)
            })
            .catch(err => {
                  alert(err.message)
            })
      }


      const handleChange = (e) => {
            const { name, value, files } = e.target;
          
            if (files) {
              setForm(prev => ({
                ...prev,
                image: files[0]
              }));
            } else {
              setForm(prev => ({
                ...prev,
                [name]: value
              }));
            }
          };

      const handleCategoryChange = (e) => {
            setpostcategory(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }));
        };



      return(
            <section>

                 <form onSubmit={handleCategorySubmit} className="bg-white shadow-lg rounded-2xl max-w-[1000px] mx-auto p-5 border my-10 border-blue-900">
                         <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                              Create Category
                        </h2>

                  <div className="mb-4">
                    <label className="block text-blue-900 font-semibold mb-2">
                       Category Name:
                    </label>
                    <input
                         type="text"
                         name="category"
                         value={postcategory.category}
                         onChange={handleCategoryChange}
                         placeholder="Enter category name"
                         className="w-full border border-blue-900 disabled rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                         required
                        />
                  </div>

                   <button
                         type="submit"
                         className="w-full cursor-pointer bg-blue-900 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition"
                        >Create
                  </button>

                 </form>

                  <form onSubmit={handleSubmit}
                         className="bg-white shadow-lg rounded-2xl max-w-[1000px] mx-auto p-5 border my-10 border-blue-900"
                  >
                        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                               Add New Menu
                        </h2>



                        <div className="mb-4">
                        <label className="block text-blue-900 font-semibold mb-2">
                               Category:
                        </label>     
                        <select 
                              name = 'choose'
                              value={form.choose}
                              onChange={handleChange}
                              required
                              className="border p-2 rounded cursor-pointer overflow-y-auto"
                        >
                          <option>-----</option>
                          {category.map(cat => (
                              <option key={cat.id} value={cat.id}>
                               {cat.name}
                              </option>
                               ))}
                         </select>
                        </div>

                        <h1>{form.choose}</h1>




                        
                  <div className="mb-4">
                    <label className="block text-blue-900 font-semibold mb-2">
                        Name:
                    </label>
                    <input
                         type="text"
                         name="name"
                         value={form.name}
                         onChange={handleChange}
                         placeholder="Enter district name"
                         className="w-full border border-blue-900 disabled rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                         required
                        />
                  </div>

                  <div className="mb-4">
                    <label className="block text-blue-900 font-semibold mb-2">
                        Cost:
                    </label>
                    <input
                         type="number"
                         name="cost"
                         value={form.cost}
                         onChange={handleChange}
                         placeholder="Enter cost"
                         className="w-full border border-blue-900 disabled rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                         required
                        />
                  </div>
                  <div className="mb-4">
                        <label className="block text-blue-900 font-semibold mb-2">
                         Images:
                        </label>
                        <input
                              type="file"
                              accept="image/*"
                              onChange={handleChange}
                               className="w-full border border-blue-900 rounded-lg px-3 py-2 bg-white focus:outline-none"
                        />
                         <div className="flex flex-wrap gap-3 mt-3">
           
                              {form.image && (
                         <img
                               src={
                              typeof form.image === "string"
                              ? `${MAIN_URL}${form.image}`         // existing image
                              : URL.createObjectURL(form.image)    // new uploaded file
                  }
                  alt="preview"
                  className="w-20 h-20 object-cover rounded-lg border border-blue-900"
             />
             )}
              
          </div>
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-900 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Create
        </button>

                  </form>
{/* 
                  {/* <div className="flex items-center">
                          <img
                            src={`${MAIN_URL}${''}`}
                            alt={userhome.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="ml-4">
                            <h6 className="text-lg font-semibold text-gray-800">Mocha</h6>
                            <p className="text-gray-500">$60</p>
                          </div>
                        </div>
                
                        {/* Quantity + Remove */}
                        {/* <div className="flex items-center space-x-3">
                          <button className="px-3 py-1 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-md transition cursor-pointer"
                            onClick={() => onDelete(userhome.id)}
                           >
                            Remove
                          </button>
                        </div> */}
            </section>
      )
}

export default AdminPage