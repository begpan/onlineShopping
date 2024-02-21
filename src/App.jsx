import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/navbar/Navbar";
import PageContainer from "./container/PageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
const App = () => {
  return (
    <BrowserRouter>
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:search" element={<Search />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
};

export default App;
