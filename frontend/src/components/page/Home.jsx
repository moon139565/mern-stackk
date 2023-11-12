import CartFeatur from "../CartFeatur";
import Homecart from "../Homecart";
import { useSelector } from "react-redux";
import { GrPrevious, GrNext } from "react-icons/gr";
import {useRef} from "react";
import Allproduct from "../Allproduct";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const productData = useSelector((state) => state.product.productList);

  const homeProductCartlist = productData.slice(7, 11);
  const homeProductCartlistvegetable = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFetcher = new Array(4).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 300;
  };
  const prevtProduct = () => {
    slideProductRef.current.scrollLeft -= 300;
  };

  const handelNavigate = ()=>{
    navigate("/contact")
  }

  return (
    <div className="p-2 md:p-4">
      <div className=" md:flex gap-3 py-2">
        <div className=" md:w-1/2 mt-8">
          <div className=" flex gap-3 bg-slate-300 w-44 px-4 text-center rounded-full">
            <p className=" text-2xl font-medium text-slate-900">Fast way</p>
            <img
              className="h-9"
              src="https://i.ibb.co/mScg4Kx/258430-removebg-preview.png"
              alt=""
            />
          </div>
          <h1 className=" text-4xl md:text-7xl font-bold py-6">
            The Fasted <span className=" text-red-600">Delivery</span>
          </h1>
          <p className="py-3 text-base max-w-lg">
            Everything we do is designed to rebuild self worth and independence,
            in order to break free from the cycle of disadvantage.
          </p>
          <button onClick={handelNavigate} className="text-2xl font-medium mt-6 bg-red-700 px-6 py-3 rounded-full text-center text-white hover:bg-red-500 duration-1000 mb-5">
            CONTUCT US
          </button>
        </div>
        <div className=" md:w-1/2 flex w-full flex-wrap gap-5 p-4 justify-center">
          {homeProductCartlist[0]
            ? homeProductCartlist.map((el) => {
                return <Homecart key={el._id} {...el} />;
              })
            : loadingArray.map((el, index) => {
                return <Homecart key={index} loading={"Loading..."} />;
              })}
        </div>
      </div>

      {/*  section-2  */}
      <div className="">
        <div className=" flex w-full items-center ">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className=" flex gap-2 ml-auto mr-2">
            <button
              onClick={prevtProduct}
              className=" bg-slate-300 text-2xl p-1 rounded hover:bg-slate-500"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className=" bg-slate-300 text-2xl p-1 rounded hover:bg-slate-500"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          ref={slideProductRef}
          className=" flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
        >
          {homeProductCartlistvegetable[0]
            ? homeProductCartlistvegetable.map((el) => {
                return <CartFeatur key={el._id} {...el} />;
              })
            : loadingArrayFetcher.map((el, index) => (
                <CartFeatur key={index} loading={"Loading..."} />
              ))}
        </div>
      </div>

      {/* section- 3 */}
      <Allproduct heading={"Your Product"}/>

    </div>

   
  );
};

export default Home;
