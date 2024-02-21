import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/ProductSlice";
import DetailComp from "../component/detail/DetailComp";
import Loading from "../component/Loading";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      {productDetailStatus == "LOADING" ? (
        <Loading />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
