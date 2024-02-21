import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 p-6 text-black">
          <div>
            <div className="text-5xl font-bold">
              Global Online Shopping Store
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              sequi dolores, sit, cupiditate at expedita consectetur explicabo
              ibero minus, deserunt unde repellat neque officia laudantium sint
              aperiam nobis esse temporibus.
            </div>
            <button className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              Explore Now
            </button>
          </div>
          <img
            width={400}
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 p-6 text-black">
          <div>
            <div className="text-5xl font-bold">
              Global Online Shopping Store
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              sequi dolores, sit, cupiditate at expedita consectetur explicabo
              ibero minus, deserunt unde repellat neque officia laudantium sint
              aperiam nobis esse temporibus.
            </div>
            <button className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              Explore Now
            </button>
          </div>
          <img
            width={400}
            src="https://akn-ss.a-cdn.akinoncloud.com/products/2023/08/25/11009599/6a08c027-bfb2-4116-8e2a-d6300490ceb9_size1400x1400_quality100.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
