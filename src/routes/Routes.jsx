/* eslint-disable no-unused-vars */
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Products from '../components/Products/Products';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Contact from '../pages/Contact/Contact';
import Product from '../pages/Product/Product';
import UserProfiler from '../pages/User/UserProfiler';

import ProtetedRoute from '../components/ProtetedRoute/ProtetedRoute';
import ItemCart from '../pages/ItemCart/ItemCart';

const Routes = () => {
	return (
		<ReactDomRoutes>
			<Route
				path="/"
				element={<Home />}
			/>

			<Route path="products">
				<Route
					index
					element={<Products  />}
				/>
				<Route
					path=":product"
					element={<Product />}
				/>
			</Route>

			<Route
				path="login"
				element={<Login />}
			/>
			<Route
				path="register"
				element={<Register />}
			/>

			<Route
				path="user/:username"
				element={
					<ProtetedRoute redirectTo={'/login'}>
						<UserProfiler />
					</ProtetedRoute>
				}
			/>

			<Route
				path="cart"
				element={
					<ProtetedRoute redirectTo={'/login'}>
						<ItemCart />
					</ProtetedRoute>
				}
			/>

			<Route
				path="contact"
				element={<Contact />}
			/>
			<Route
				path="*"
				element={<h2>ERROR!</h2>}
			/>
		</ReactDomRoutes>
	);
};

export default Routes;
