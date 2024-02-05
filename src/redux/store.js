import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cartSlice';
import userReducer from './user/userslice';
import productsReducer from './products/productsSLice';
import recommendedReducer from './recommended/RecommendedSlice';
import categoriesReducer from './categories/categoriesSlice';

const reducers = combineReducers({
	user: userReducer,
	products: productsReducer,
	cart: cartReducer,
	recommended: recommendedReducer,
	categories: categoriesReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	//Agregar middleware para que no se queje de que el estado no es serializable (por el persist)
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
