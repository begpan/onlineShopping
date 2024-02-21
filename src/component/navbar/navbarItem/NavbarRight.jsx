import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCardTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts } = useSelector((state) => state.carts);
  console.log(carts);

  useEffect(() => {
    dispatch(getCardTotal());
  }, [dispatch]);

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input className="bg-gray-200 outline-none" type="text" />
        <FaSearch size={25} />
      </div>
      <FaRegHeart size={25} />
      <div onClick={() => navigate("cart")} className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {carts?.length}
        </div>
        <SlBasket size={25} />
      </div>
    </div>
  );
};

export default NavbarRight;
