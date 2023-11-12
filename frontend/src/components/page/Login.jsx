import { useEffect, useState } from "react";
import signupiconImg from "../img-asis/login-animation.gif";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const [data, setdata] = useState(()=>{
    const storedData = JSON.parse(localStorage.getItem("userData")) || {
        email: "",
        password: "",
      };
      return storedData;
    // email: "",
    // password: "",
  });

  useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem("userData")) || {
        email: "",
        password: "",
      };
      setdata(storedData);
  },[])

  const userData = useSelector((state) => state);

  const dispatch = useDispatch();

  const handelshowpasswordd = () => {
    setshowPassword((prev) => !prev);
  };

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      const newData = {
        ...prev,
        [name]: value,
      };
      return newData
    });
  };

  const handelchange = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${import.meta.env.VITE_APP_SERVER_DOMAIN}/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const resData = await fetchData.json();
     
      toast(resData.message);
      if (resData.alert) {
        dispatch(loginRedux(resData));
        // save localStorage
       
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }

    } else {
      alert("please fill all require");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        {/* <h1 className="text-center text-2xl font-bold">Sign Up</h1> */}
        <div className="w-20 overflow-hidden drop-shadow-md rounded-full shadow-md">
          <img src={signupiconImg} alt="" className="w-full" />
        </div>

        
        <form
          action=""
          className="w-full py-4 flex flex-col"
          onSubmit={handelchange}
        >
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-slate-200 w-full px-2 py-1 rounded mt-1 mb-2 outline-none"
            value={data.email}
            onChange={handelOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="bg-slate-200 w-full  outline-none"
              value={data.password}
              onChange={handelOnChange}
            />
            <span
              className="flex text-2xl cursor-pointer"
              onClick={handelshowpasswordd}
            >
              {showPassword ? <BiShow /> : <BiSolidHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 duration-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Log In
          </button>
          <p className="text-sm mt-2">
            Dont have accoun?{" "}
            <Link to={"/signup"} className="text-red-700 underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
