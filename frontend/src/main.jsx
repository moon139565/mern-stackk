
import ReactDOM from 'react-dom/client'
import App from './App'
import 'tailwindcss/tailwind.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/page/Home';
import Menu from './components/page/Menu';
import About from './components/page/About';
import Contact from './components/page/Contact';
import Login from './components/page/Login';
import Newproduct from './components/page/Newproduct';
import Signup from './components/page/Signup';
import { Provider } from 'react-redux';
import { store } from './redux/index.redux';
import Cart from './components/page/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      {/* <Route path='menu' element={<Menu/>}/> */}
      <Route path='menu/:filterby' element={<Menu/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='newproduct' element={<Newproduct/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='cart' element={<Cart/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
)
