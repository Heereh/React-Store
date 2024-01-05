import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
//import { AuthProvider } from './context/AuthContext.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<NextUIProvider>
				<BrowserRouter>
					<PersistGate persistor={persistor}>
						<App />
					</PersistGate>
				</BrowserRouter>
			</NextUIProvider>
		</Provider>
	</React.StrictMode>,
);
