import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route element={<Layout/>} >
      <Route path="/" element={<HomePage/>} />
      <Route path="/produtos" element={<ProductPage/>}/>
      <Route path="/funciona" element={<ProductPage/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
