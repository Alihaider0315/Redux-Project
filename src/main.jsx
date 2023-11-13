import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <Header/>
    <App />
    <Footer/>
  </BrowserRouter>
  <ToastContainer />
  </Provider>

  </React.StrictMode>,
)
