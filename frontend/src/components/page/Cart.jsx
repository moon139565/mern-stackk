import { useSelector } from "react-redux";
import Cartproduct from "../Cartproduct";
import emptycartimage from "../img-asis/empty.gif"

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  // total price
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  // total qty
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>
        { productCartItem[0] ?
          <div className=" my-4 md:flex gap-3">
            {/* display cart items  */}
            <div className=" w-full max-w-3xl">
              {productCartItem.map((el) => {
                return (
                  <Cartproduct
                    key={el._id}
                    {...el}
                    qty={el.qty}
                    total={el.total}
                  />
                );
              })}
            </div>

            {/* total cart items  */}
            <div className=" w-full max-w-sm ml-auto">
              <h2 className=" bg-blue-500 text-white p-2 text-lg">Summary</h2>
              <div className=" flex py-2 text-lg border-b">
                <p>Total Qty :</p>
                <p className=" ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className=" flex py-2 text-lg border-b">
                <p>Total Price :</p>
                <p className=" ml-auto w-32 font-bold">
                  <span className=" text-red-600"> $</span>
                  {totalPrice}
                </p>
              </div>
              <button className=" bg-red-500 w-full py-2 font-bold text-lg text-white">
                Payment
              </button>
            </div>
          </div>
          :
          <>
          <div className=" flex w-full justify-center items-center flex-col">
            <img src={emptycartimage} alt="" className=" w-full max-w-sm"/>
            <p className=" text-slate-500 text-3xl font-bold">Please Add Item</p>
          </div>
          </>
        }
      </div>
    </>
  );
};

export default Cart;
