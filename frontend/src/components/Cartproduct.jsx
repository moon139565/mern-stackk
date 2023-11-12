import { FaPlus, FaMinus } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { DeletCartItem, increasedQty, decreasedQty } from "../redux/productSlice";

const Cartproduct = (el) => {
  const { name, total, qty, image, category, price, _id } = el;
  const dispatch = useDispatch()
  return (
    <div className=" bg-slate-200 p-2 flex gap-4 border border-slate-300 rounded">
      <div className=" bg-white p-3 rounded overflow-hidden">
        <img src={image} alt="" className=" h-28 w-60 object-cover" />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className=" flex justify-between">
        <h3 className=" font-semibold capitalize  text-stone-900 text-lg md:text-xl">
          {name}
        </h3>
        <div className=" cursor-pointer">
            <AiFillDelete className=" text-red-400 text-xl hover:text-red-600 transition-all" onClick={()=>dispatch(DeletCartItem(_id))}/>
        </div>
        </div>
        <p className=" text-xl">{category}</p>
        <p className=" font-bold  text-xl">
          <span className=" text-red-600">$</span>
          <span className=" text-slate-700">{price}</span>
        </p>

        <div className=" flex justify-between">
          <div className=" flex gap-3 items-center ">
            <button onClick={()=>dispatch(decreasedQty(_id))} className=" bg-slate-300 p-1 mt-2 hover:bg-slate-400 hover:text-white rounded-sm duration-1000">
              <FaMinus />
            </button>
            <p className=" font-semibold p-1">{qty}</p>
            <button
              onClick={()=>dispatch(increasedQty(_id))}
              className=" bg-slate-300 p-1 mt-2 hover:bg-slate-400 hover:text-white rounded-sm duration-1000"
            >
              <FaPlus />
            </button>
          </div>
          <div className=" flex items-center font-bold  text-xl">
            <p>Total :</p>
            <span className="text-red-600"> $</span>
            <span className="text-slate-700"> {total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartproduct;
