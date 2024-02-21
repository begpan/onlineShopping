import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`products/${product?.id}`)}
      className="w-[310px] p-3 mb-5 mx-5 border rounded-md relative cursor-pointer"
    >
      <div className="text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1">
        {product?.price} <span className="text-sm">$</span>
      </div>

      <img
        className="w-[200px] h-[200px] object-cover m-auto bg-white"
        src={product?.image}
        alt=""
      />
      <div className="text-center px-3 mt-3 text-xl font-bold">
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
