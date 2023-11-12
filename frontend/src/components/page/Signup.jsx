import {  useState } from "react";
import signupiconImg from "../img-asis/login-animation.gif";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { imagetoBase64 } from "../../utility/imagetoBase64";
import {toast} from "react-hot-toast"


const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    image: ''
  });

  const handelshowpasswordd = () => {
    setshowPassword((prev) => !prev);
  };

  const handelshowConfirmPassword = () => {
    setshowConfirmPassword((prev) => !prev);
  };

  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handelchange = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmpassword } = data;
    if (firstName && email && password && confirmpassword) {
      if (password === confirmpassword) {
        const fetchData = await fetch(`${import.meta.env.VITE_APP_SERVER_DOMAIN}/signup`,{
          method: "POST",
          headers:{
            "content-type": "application/json"
          },
          body:JSON.stringify(data)
        })

        const resData = await fetchData.json()

        toast(resData.message)
        if(resData.alert){
          setTimeout(() => { 
           navigate("/login");
          }, 1000);
        }
        // alert(resData.message);
        // navigate("/login");
      } else {
        // alert("password not match");
        toast("password not match")
      }
    } else {
      // alert("please fill all require");
      toast("please fill all require")
    }
  };

  const handelImage =async (e)=>{

        const data = await imagetoBase64(e.target.files[0])
   

        setdata((preve)=>{
            return{
                ...preve,
                image: data
            }
        })
  }

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        {/* <h1 className="text-center text-2xl font-bold">Sign Up</h1> */}
        <div className="w-20 h-20 overflow-hidden drop-shadow-md rounded-full shadow-md relative">
          <img src={data.image ? data.image : signupiconImg} alt="" className="w-full h-full" />
          <label htmlFor="profileImage">
            <div className=" absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center  cursor-pointer ">
              <p className=" text-sm p-1 text-white">Upload</p>
            </div>
            <input type="file" name="profileImage" accept="image/*" id="profileImage" onChange={handelImage} className=" hidden"/>
          </label>
        </div>

        <form
          action=""
          className="w-full py-4 flex flex-col"
          onSubmit={handelchange}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="bg-slate-200 w-full px-2 py-1 rounded mt-1 mb-2 outline-none"
            value={data.firstName}
            onChange={handelOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="bg-slate-200 w-full px-2 py-1 rounded mt-1 mb-2 outline-none"
            value={data.lastName}
            onChange={handelOnChange}
          />

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

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmpassword"
              id="confirmpassword"
              className="bg-slate-200 w-full  outline-none"
              value={data.confirmpassword}
              onChange={handelOnChange}
            />
            <span
              className="flex text-2xl cursor-pointer"
              onClick={handelshowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiSolidHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 duration-500 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign Up
          </button>
          <p className="text-sm mt-2">
            Already have accoun?{" "}
            <Link to={"/login"} className="text-red-700 underline">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
