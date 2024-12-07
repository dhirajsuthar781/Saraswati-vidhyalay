import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { NextUIProvider } from '@nextui-org/react'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </BrowserRouter>
  </Provider>
)


