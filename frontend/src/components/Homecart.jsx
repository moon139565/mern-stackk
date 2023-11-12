import { Link } from "react-router-dom";

const Homecart = (el) => {
  const { image, name, price, category, loading, _id } = el;
  return (
    <div className=" bg-white shadow rounded p-2 min-w-[150px]">
      {name ? (
        <>
        <Link to={`/menu/${_id}`} onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
          <div className=" md:w-40 min-h-[150px]">
            <img src={image} alt="" className=" w-full h-full" />
          </div>
          <h3 className=" font-semibold capitalize text-center text-stone-900 md:text-lg text-4xl">
            {name}
          </h3>
          <p className="text-center">{category}</p>
          <p className=" font-bold text-center">
            Price:
            <span className=" text-red-600"> $</span>
            <span className=" text-slate-700">{price}</span>
          </p>
          </Link>
        </>
      )
      :
      <div className="flex justify-center items-center h-full">
        <p>{loading}</p>
      </div>
    }
    </div>
  );
};

export default Homecart;
