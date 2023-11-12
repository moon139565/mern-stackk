import { useSelector } from "react-redux";
import Homecart from "../Homecart";
import { useNavigate } from "react-router-dom";

const About = () => {
  const productData = useSelector((state) => state.product.productList);

  const homeProductCartlist = productData.slice(12, 17);
  const loadingArray = new Array(4).fill(null);

  const navigate = useNavigate()

  const handelClick = ()=>{
    navigate("/contact")
  }

  return (
    <div className=" p-2 md:p-4">
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
            The Best <span className=" text-red-600">Product</span>
          </h1>
          <p className="py-3 text-base max-w-lg">
            Everything we do is designed to rebuild self worth and independence,
            in order to break free from the cycle of disadvantage.
          </p>
          
          <button onClick={handelClick} className="text-2xl font-medium mt-6 bg-red-700 px-6 py-3 rounded-full text-center text-white hover:bg-red-500 duration-1000 mb-5">
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
    </div>
  )
}

export default About