import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover-fit"
        src={cart?.image}
        alt=""
      />
      <div className="w-[476px]">
        <div className="text-xl text-nowrap">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="text-2xl font-bold">
        {cart?.price} $ ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white w-[150px] rounded-md text-2xl cursor-pointer h-16 flex items-center justify-center"
      >
        Delete item
      </div>
    </div>
  );
};

export default CartComp;
