import { useSelector } from "react-redux";
import CartFeatur from "./CartFeatur";
import FilterProduct from "./FilterProduct";
import { useEffect, useRef, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Allproduct = ({heading}) => {
  const productData = useSelector((state) => state.product.productList);

  

  const slideCategoryRef = useRef();
  const nextCategory = () => {
    slideCategoryRef.current.scrollLeft += 200;
  };
  const prevtCategory = () => {
    slideCategoryRef.current.scrollLeft -= 200;
  };

  const categoryList = [...new Set(productData.map((el) => el.category))];

  // data filter
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setdataFilter] = useState([]);
  useEffect(() => {
    setdataFilter(productData);
  }, [productData]);

  const handelProductData = (category) => {
    setFilterBy(category)
    const filterProduct = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setdataFilter(() => {
      return [...filterProduct];
    });
  };

  return (
    <div>
      <div className="my-5">
        <div className=" flex">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            {heading}
          </h2>
          <div className=" md:hidden flex gap-2 ml-auto mr-2">
            <button
              onClick={prevtCategory}
              className=" bg-slate-300 text-2xl p-1 rounded hover:bg-slate-500"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextCategory}
              className=" bg-slate-300 text-2xl p-1 rounded hover:bg-slate-500"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          ref={slideCategoryRef}
          className=" flex gap-4 start-0 md:justify-center overflow-x-scroll scrollbar-none"
        >
          {categoryList[0] &&
            categoryList.map((el, index) => {
              return (
                <FilterProduct
                  key={index}
                  category={el}
                  isActive={el.toLowerCase() === filterby.toLowerCase()}
                  onClick={() => handelProductData(el)}
                />
              );
            })}
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-7">
          {dataFilter.map((el, index) => {
            return <CartFeatur key={index} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Allproduct;