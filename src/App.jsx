import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductDetail from "./component/product/ProductPage.jsx"
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Product" element={<ProductDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App