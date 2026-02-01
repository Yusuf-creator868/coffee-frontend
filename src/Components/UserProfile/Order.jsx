import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import api from "../../api";
import { Link, Outlet } from "react-router-dom";

const Order = () => {

  const [men, setmen] = useState([])
  const cart_code = localStorage.getItem("cart_code");
  const [cartitems, setcartitems] = useState([])
  const [totals, settotals] = useState([])
  const Tax = 1
  const total = totals.sum_total + Tax

  useEffect(() => {
    api.get('get_category/', { withCredentials: true })
      .then(res => setmen(res.data))
      .catch(err => console.log(err.message))
  }, [])

  const [active, setActive] = useState("dine");

  const fetchCart = () => {
    api.get(`get_cart?code=${cart_code}`, {withCredentials:true})
      .then(res => {
        setcartitems(res.data.items)
        settotals(res.data)
      })
      .catch(err => console.log(err.message))
  }

  useEffect(() => {
    fetchCart()
  }, [])

  function Delete(id) {
    api.delete(`delete/${id}`, {withCredentials:true})
      .then(() => {
        setcartitems(prev => prev.filter(menu => menu.id !== id))
        fetchCart()
      })
      .catch(err => console.log(err.message))
  }

  return (
    /* ✅ PAGE BACKGROUND */
    <div className="space-y-5  p-4 rounded-xl">

      {/* ===== Header ===== */}
      <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
        <h1 className="text-3xl font-bold text-[#5A3E2B]">Order</h1>
        <h1 className="text-[#7A5C45]">Hello</h1>
      </div>

      {/* ===== Order Layout ===== */}
      <div className="flex items-start justify-center gap-5 max-lg:flex-col">

        {/* ================= LEFT PANEL ================= */}
        <div
          className="
            border-2 border-[#BC8A5F]
            bg-[#FFF9F3]
            h-[650px] max-lg:h-auto
            max-w-[900px] w-full
            rounded-xl py-2 px-4
            space-y-1
            overflow-hidden overflow-y-scroll
            shadow-sm
          "
        >

          {/* Search + Filter */}
          <div className="flex items-center gap-5 py-2 px-4 max-sm:flex-col max-sm:items-stretch">

            <div className="relative flex items-center w-full max-w-sm">
              <IoSearch className="absolute left-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                className="w-full py-1 px-2 pl-10 border-2 rounded-[5px] border-[#BC8A5F] bg-white"
                placeholder="Search products..."
              />
            </div>

            <select className="border-2 border-[#BC8A5F] py-1.5 px-4 rounded-[5px] w-fit max-sm:w-full bg-white">
              {men.map((pre, key) => (
                <option key={key}>{pre.name}</option>
              ))}
            </select>

          </div>

          <hr className="border-[#BC8A5F]" />

          {/* Category Links */}
          <div className="flex items-center gap-3 px-3 py-2 flex-wrap">
            {men.map((pre, key) => (
              <Link
                key={key}
                to={pre.slug}
                className="
                  py-1 px-2 border-2 cursor-pointer
                  border-[#916844]
                  bg-[#F6DFC8]
                  hover:bg-amber-800 hover:text-amber-50
                  rounded-[5px]
                  text-sm
                "
              >
                {pre.name}
              </Link>
            ))}
          </div>

          <div className="min-w-0">
            <Outlet context={{ fetchCart }} />
          </div>

        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div
          className="
            border-2 border-[#BC8A5F]
            bg-[#FFF9F3]
            h-[650px] max-lg:h-auto
            max-w-[300px] max-lg:max-w-full
            w-full
            flex flex-col justify-between
            p-4 rounded-[10px]
            gap-4
            shadow-sm
          "
        >

          {/* ===== Order Details ===== */}
          <div className="space-y-2">
            <h1 className="font-semibold text-[#5A3E2B]">Order Details</h1>

            <div className="inline-flex rounded-xl border-2 gap-3 border-[#C89B6E] bg-[#F6DFC8] p-1 w-fit max-sm:w-full max-sm:justify-between">
              <button
                onClick={() => setActive("dine")}
                className={`px-6 py-2 rounded-lg font-medium transition-all
                  ${active === "dine"
                    ? "bg-[#C89B6E] text-white"
                    : "text-black hover:bg-[#EED1B3]"
                  }
                `}
              >
                Dine in
              </button>

              <button
                onClick={() => setActive("take")}
                className={`px-6 py-2 rounded-lg font-medium transition-all
                  ${active === "take"
                    ? "bg-[#C89B6E] text-white"
                    : "text-black hover:bg-[#EED1B3]"
                  }
                `}
              >
                Take away
              </button>
            </div>

            {/* Products */}
            <div className="space-y-2">
              {cartitems.map((pre, key) => (
                <div key={key}>
                  <div className="flex justify-between">
                    <h1>{pre.menus.name}</h1>
                    <h1>${pre.menus.cost}</h1>
                  </div>

                  <div className="flex justify-between text-sm">
                    <h1>X{pre.quantity}</h1>
                    <h1
                      onClick={() => Delete(pre.id)}
                      className="cursor-pointer py-1 px-2 border-2 border-[#BC8A5F]"
                    >
                      Delete
                    </h1>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>

          {/* ===== Checkout ===== */}
          <div className="space-y-2">
            <button className="w-full border-2 rounded-[10px] border-[#C89B6E] bg-[#F6DFC8] hover:bg-[#C89B6E] hover:text-white">
              Clear All Orders
            </button>

            <div className="border-2 p-2 space-y-1 bg-white rounded-md">
              <div className="flex justify-between">
                <h1>Subtotal</h1>
                <h1>${totals.sum_total}</h1>
              </div>

              <div className="flex justify-between">
                <h1>Tax</h1>
                <h1>$1.00</h1>
              </div>

              <hr />

              <div className="flex justify-between font-bold">
                <h1>Total</h1>
                <h1>${total}</h1>
              </div>
            </div>

            <button className="w-full border-2 rounded-[10px] border-[#C89B6E] bg-[#C89B6E] text-white hover:opacity-90">
              Process Transaction
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Order