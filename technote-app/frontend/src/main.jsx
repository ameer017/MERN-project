import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import Store from './app/Store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <React.StrictMode>
      <BrowserRouter>
          <Routes >
              <Route path='/*' element={<App />}/>
          </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  </Provider>
)
