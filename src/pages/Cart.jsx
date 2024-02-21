import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCardTotal } from "../redux/cartSlice";
import { useEffect } from "react";
import CartComp from "../component/cart/CartComp";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  console.log(carts, totalAmount, itemCount, "card");

  useEffect(() => {
    dispatch(getCardTotal());
  }, [dispatch]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl">
            Total :
            <span className="font-bold text-3xl ml-1">{totalAmount} $</span>
          </div>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
};
export default Cart;
