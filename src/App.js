import { BrowserRouter,Routes,Route } from "react-router-dom";
//Components
import { Header, Footer } from "./Components";
//Pages
import { Home, Login, Register, Reset, Cart, StorePage, IPhone, IPad } from "./pages";

import { Flip, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
     <BrowserRouter> 
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/reset" element={<Reset/>}/>
            <Route path="/store" element={<StorePage/>}/>
            <Route path="/iphone" element={<IPhone/>}/>
            <Route path="/ipad" element={<IPad/>}/>
          </Routes>
          <ToastContainer autoClose={2000} transition={Flip} position="top-center"/>
        <Footer/>
     </BrowserRouter> 
    </>
  );
}

export default App;
