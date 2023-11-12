import {BsCloudUpload}  from "react-icons/bs"
import { imagetoBase64 } from "../../utility/imagetoBase64"
import { useState } from "react"
import { toast } from "react-hot-toast"

const Newproduct = () => {

  const[data, setData] = useState({
    name:"",
    category:"",
    image:"",
    price:"",
    description:"",
  })

  const handelOnchange = (e)=>{
    const {name, value} = e.target
    setData((prev)=>{
      return{
        ...prev,
        [name]: value
      }
    })
  }

  const handelSubmit =async (e)=>{
    e.preventDefault()
    const { name, category, image, price, description } = data;
    if (name && category && image && price && description) {
      
        const fetchData = await fetch(`${import.meta.env.VITE_APP_SERVER_DOMAIN}/newproduct`,{
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
          }, 1000);
        }

        setData(()=>{
          return{
            name:"",
            category:"",
            image:"",
            price:"",
            description:"",
          }
        })
    } else {
      toast("please fill all require")
    }
  };

  const handelImage = async (e)=>{
    const data = await imagetoBase64(e.target.files[0])
    setData((prev)=>{
      return{
        ...prev,
        image: data
      }
    })
}
  return (
    <div className="p-4">
      <form action="" className="m-auto w-full bg-white max-w-md shadow flex flex-col p-3" onSubmit={handelSubmit}>
        <label htmlFor="name" >Name</label>
        <input type="text" name="name" className="bg-slate-200 p-1 my-1 rounded" onChange={handelOnchange} value={data.name}/>
        <label htmlFor="category">Category</label>
        <select name="category" id="category" className="bg-slate-200 p-1 my-1 rounded" onChange={handelOnchange} value={data.category}>
          <option value={"other"}>select category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetable"}>Vegetable</option>
          <option value={"icream"}>Icream</option>
          <option value={"crisp"}>crisp savoury</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"rice"}>rice</option>
          <option value={"cake"}>Cake</option>
          <option value={"burger"}>Burger</option>
          <option value={"panner"}>Panner</option>
          <option value={"sandwich"}>Sandwich</option>
        </select>
          {/* image upload  */}
        <label htmlFor="image">Image
        <div className="h-40 w-full cursor-pointer bg-slate-200  rounded flex items-center justify-center">
          {
            data.image ? <img src={data.image} alt="" className="h-full"/> :  <span className="text-5xl"><BsCloudUpload/></span>
          }
          
          <input type="file" id="image" accept="image/*" onChange={handelImage} className=" hidden"/>
        </div>
        </label>

        {/* price  */}
        <label htmlFor="price" className="my-1">Price</label>
        <input type="text" name="price" className="bg-slate-200 p-1 my-1 rounded" onChange={handelOnchange} value={data.price}/>

        {/* description */}
        <label htmlFor="description">Description</label>
        <textarea rows="2" name="description" className="bg-slate-200 p-1 my-1 rounded resize-none" onChange={handelOnchange} value={data.description}></textarea>

        <button className="bg-red-400 hover:bg-red-500 duration-500 text-lg text-white font-md my-2 drop-shadow rounded">Save</button>
      </form>

      
    </div>
  )
}

export default Newproduct