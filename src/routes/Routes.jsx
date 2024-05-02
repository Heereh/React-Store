/* eslint-disable no-unused-vars */
import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Home from '../pages/Home/Home';
import Products from '../components/Products/Products';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Contact from '../pages/Contact/Contact';
import Product from '../pages/Product/Product';
import UserProfiler from '../pages/User/UserProfiler';
import Resumen from '../pages/Resumen/Resumen';

const Checkout = lazy(() => import('../pages/Checkout/Checkout'));

import ProtetedRoute from '../components/ProtetedRoute/ProtetedRoute';
import ItemCart from '../pages/ItemCart/ItemCart';
import Logrado from '../pages/Logrado/Logrado';
import Compra from '../pages/Compra/Compra';

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
					element={<Products />}
				/>
				{/* <Route
					path=":product"
					element={<Product />}
				/> */}
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
				path="checkout"
				element={
					<ProtetedRoute redirectTo={'/login'}>
						<Suspense>
							<Checkout />
						</Suspense>
					</ProtetedRoute>
				}
			/>

			<Route
				path="/succeded"
				element={
					<ProtetedRoute redirectTo={'/login'}>
						<Suspense>
							<Logrado />
						</Suspense>
					</ProtetedRoute>
				}
			/>
			<Route
				path="/resumen/"
				element={
					<ProtetedRoute redirectTo={'/login'}>
						<Resumen></Resumen>
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
