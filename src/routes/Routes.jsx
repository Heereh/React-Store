/* eslint-disable no-unused-vars */
import {
  Routes as ReactDomRoutes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Products from '../layouts/Products/Products';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Contact from '../pages/Contact/Contact';
import Product from '../pages/Product/Product';
import UserProfiler from '../pages/User/UserProfiler';
/* import AllProducts from '../pages/AllProducts/AllProducts'; */
const Routes = () => {
  return (
    /*  <BrowserRouter>
    </BrowserRouter> */
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />

      <Route path="products">
        <Route index element={<Products isEnabled={true} />} />
        <Route path=":product" element={<Product />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="user/:username" element={<UserProfiler />} />

      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<h2>ERROR!</h2>} />
    </ReactDomRoutes>
  );
};

export default Routes;
