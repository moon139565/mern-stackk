import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
  const [showMenue, setshowMenue] = useState(false);
  const [showtoggol, setshowtoggol] = useState(false);
  const userData = useSelector((state) => state.user);
  const disPatch = useDispatch();
  // console.log(userData);
  const handelShowMenu = () => {
    setshowMenue((prev) => !prev);
  };

  // product cart item 
  const productCartItem = useSelector((state)=> state.product.cartItem);

  const handelToggol = () => {
    setshowtoggol((prev) => !prev);
  };


  const handelLogout = () => {
    disPatch(logOutRedux());
    toast("Logout successfully");
  };

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop  */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <h2 className="text-2xl md:text-4xl tracking-wider font-bold">
            <span className="text-red-500">M</span>OO
            <span className="text-red-500">N</span>
          </h2>
        </Link>
        <div className="flex md:items-center gap-4 md:gap-7">
          <nav className=" gap-2 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={""}>Home</Link>
            <Link to={"menu/653bf07b1d918537404daac1"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div
            className="text-2xl text-slate-600 md:hidden relative "
            onClick={handelToggol}
          >
            <AiOutlineBars className="text-2xl text-slate-600" />

            {showtoggol && (
              <div className=" absolute bg-white md:hidden">
                <nav className=" gap-2 md:gap-6 text-base md:text-lg pt-9 px-5 flex flex-col">
                  <Link className="py-2 px--2" to={""}>
                    Home
                  </Link>
                  <Link
                    className="py-2 px--2"
                    to={"menu/653bf07b1d918537404daac1"}
                  >
                    Menu
                  </Link>
                  <Link className="py-2 px--2" to={"about"}>
                    About
                  </Link>
                  <Link className="py-2 px--2" to={"contact"}>
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
              {" "}
              <BsCartFill />
              <div className="absolute -top-2 -right-1 bg-red-500 text-white w-4 text-sm p-0 m-0 rounded-full text-center">
                {productCartItem.length}
              </div>
            </Link>
          </div>
          <div
            className=" text-slate-600 cursor-pointer"
            onClick={handelShowMenu}
          >
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-sm">
              {userData.image ? (
                <img src={userData.image} className="w-full h-full" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenue && (
              <div className="absolute bg-white p-2 right-2 shadow drop-shadow-md flex flex-col">
                {userData.email === import.meta.env.VITE_APP_SERVER_EMAIL && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer"
                  >
                    New Product
                  </Link>
                )}

                {userData.email ? (
                  <p
                    className="text-white bg-red-500 text-center rounded mt-2 hover:bg-red-700"
                    onClick={handelLogout}
                  >
                    LogOut ({userData.firstName})
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer"
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile  */}
    </header>
  );
};

export default Header;
