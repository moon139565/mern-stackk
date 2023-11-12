import { GiForkKnifeSpoon } from "react-icons/gi";

const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
      <div className={`text-3xl p-5 rounded-full cursor-pointer ${isActive ? " bg-red-500 text-white" : "bg-yellow-500"}`}>
        <GiForkKnifeSpoon />
      </div>
        <p className=" text-center font-bold capitalize">{category}</p>
    </div>
  );
};

export default FilterProduct;