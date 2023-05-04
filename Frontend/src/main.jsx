import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
