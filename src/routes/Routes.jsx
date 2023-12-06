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
import { AuthProvider } from '../context/AuthContext';
import ProtetedRoute from '../components/ProtetedRoute/ProtetedRoute';
/* import AllProducts from '../pages/AllProducts/AllProducts'; */
const Routes = () => {
  return (
    <AuthProvider>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />

        <Route path="products">
          <Route index element={<Products isEnabled={true} />} />
          <Route path=":product" element={<Product />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route
          path="user/:username"
          element={
            <ProtetedRoute redirectTo={'/login'}>
              <UserProfiler />
            </ProtetedRoute>
          }
        />

        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h2>ERROR!</h2>} />
      </ReactDomRoutes>
    </AuthProvider>
  );
};

export default Routes;
