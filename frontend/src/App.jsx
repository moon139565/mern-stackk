
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/page/Footer';



const App = () => {

  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)

  useEffect(() => {
    (async()=>{
      const res = await fetch(`${import.meta.env.VITE_APP_SERVER_DOMAIN}/product`)
      const resData = await res.json({})
      // console.log(resData);
      dispatch(setDataProduct(resData))
    })()
  }, [])

  return (
    <>
    <Toaster />
    <div>
      <Header/>
      <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet/>
      </main>
      <Footer />
    </div>
    </>
    
  )
}

export default App
