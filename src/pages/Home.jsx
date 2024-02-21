import { useState } from "react";
import Category from "../component/home/Category";
import Products from "../component/home/Products";
import SliderComp from "../component/home/SliderComp";
import Sorting from "../component/home/Sorting";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <SliderComp />
      <Sorting setSort={setSort} />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
