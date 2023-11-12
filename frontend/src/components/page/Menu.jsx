import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Allproduct from "../Allproduct";
import { addCartItems } from "../../redux/productSlice";

const Menu = () => {
  const dispatch = useDispatch()
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);

  const productDesplay = productData.filter((el) => el._id === filterby)[0];

  const handelCartItems = () => {
    dispatch(addCartItems(productDesplay));
  };

  return (
    <div className=" p-2 md:p-4">
      <div className="w-full max-w-4xl late-400 m-auto md:flex bg-white">
        <div className=" max-w-sm overflow-hidden w-ful p-5 ">
          <img
            src={productDesplay.image}
            className=" hover:scale-105 transition-all h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className=" font-semibold capitalize  text-stone-900 text-lg md:text-4xl">
            {productDesplay.name}
          </h3>
          <p className=" text-2xl">{productDesplay.category}</p>
          <p className=" font-bold  text-2xl">
            <span className=" text-red-600">$</span>
            <span className=" text-slate-700">{productDesplay.price}</span>
          </p>
          
          <div className=" flex gap-3">
            <button className=" bg-yellow-500 min-w-[100px] p-1 mt-2 hover:bg-yellow-700 hover:text-white rounded-sm duration-1000">
              Buy
            </button>
            <button onClick={handelCartItems} className=" bg-yellow-500 min-w-[100px] p-1 mt-2 hover:bg-yellow-700 hover:text-white rounded-sm duration-1000">
              Add Cart
            </button>
          </div>
          <div className=" text-2xl mt-1">
            <p>Description:</p>
            <p className=" text-lg">{productDesplay.description}</p>
          </div>
        </div>
      </div>
      <Allproduct heading={"Related Product"}/>
    </div>
  );
};

export default Menu;
