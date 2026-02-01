import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import api, { MAIN_URL } from "../../api";


const OrderMenu = () => {
  const { slug } = useParams();
  const activeSlug = slug || "coffee";
  const { fetchCart } = useOutletContext();
  const [menus, setMenus] = useState([]); // array
  const [exists, setExists] = useState({}); // object per menu item
  const cart_code = localStorage.getItem("cart_code");

  // Fetch menu items
  useEffect(() => {
    api.get(`get_menu/${activeSlug}`, { withCredentials: true })
      .then((res) => {
        setMenus(res.data.menues);
      })
      .catch((err) => console.log(err.message));
  }, [activeSlug]);

  // Fetch if items exist in cart
  // useEffect(() => {
  //   if (!menus.length) return;

  //   menus.forEach((menu) => {
  //     api
  //       .get(`product_in_cart?code=${cart_code}&menu_id=${menu.id}`)
  //       .then((res) => {
  //         setExists((prev) => ({
  //           ...prev,
  //           [menu.id]: res.data.exists,
  //         }));
  //       })
  //       .catch((err) => console.log(err.message));
  //   });
  // }, [menus, cart_code]);

  // Add item to cart

  function Add_item(menuID) {
    const new_item = { code: cart_code, menu_id: menuID };
    api
      .post("add_item/", new_item, {withCredentials:true})
      .then((res) => {
        console.log(res.data);
        fetchCart()
        // setExists((prev) => ({
        //   ...prev,
        //   [menuID]: true,
        // }));
      })
      .catch((err) => console.log(err.message));
  }


  // if (!menus.length) return <p>NO products yet</p>;

  return (
    <div className="grid grid-cols-1 [@media(max-width:955px)]:grid-cols-2 [@media(min-width:955px)_and_(max-width:1155px)]:grid-cols-3 lg:grid-cols-4 gap-2">
      {menus.map((pre) => (
        <div key={pre.id} className="p-2 flex flex-col items-center">
          <div className="p-2 border-2 border-[#BC8A5F] rounded-[10px]">
            <img
              className="w-30 h-30"
              src={`${MAIN_URL}${pre.image}`}
              alt={pre.name}
            />
            <h1>{pre.name}</h1>
            <h1 className="text-end">${pre.cost}</h1>
            <button
              disabled={exists[pre.id]}
              onClick={() => Add_item(pre.id)}
              className="text-center px-3 py-1 border-2 mt-2 rounded-[10px] border-[#916844] cursor-pointer hover:bg-amber-800 hover:text-amber-50"
            >
              {exists[pre.id] ? "Added" : "Add to Dish"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderMenu;