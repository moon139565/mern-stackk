import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItems } from "../redux/productSlice";

const CartFeatur = (el) => {
  const { image, name, price, category, loading, _id } = el;
  const dispatch = useDispatch();
  const handelCartItems = () => {
    dispatch(
      addCartItems({
        image,
        name,
        price,
        category,
        loading,
        _id,
      })
    );
  };

  return (
    <div className=" flex flex-col gap-2 w-full min-w-[300px] max-w-[310px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer">
      {image ? (
        <>
          <Link
            to={`/menu/${_id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className=" h-28 flex flex-col justify-center items-center">
              <img src={image} alt="" className="  h-full" />
            </div>
            {/* <div className='flex flex-col justify-center'> */}
            <h3 className="  font-bold capitalize text-center text-stone-900 md:text-lg text-4xl">
              {name}
            </h3>
            <p className="text-center font-medium">{category}</p>
            <p className=" font-bold text-center">
              Price:
              <span className=" text-red-600"> $</span>
              <span className=" text-slate-700">{price}</span>
            </p>
          </Link>
          <button
            onClick={handelCartItems}
            className=" bg-yellow-500 py-2 px-2 mt-2 hover:bg-yellow-700 hover:text-white rounded-sm duration-1000 w-full"
          >
            Add Cart
          </button>
          {/* </div> */}
        </>
      ) : (
        <p>{loading}</p>
      )}
    </div>
  );
};

export default CartFeatur;
