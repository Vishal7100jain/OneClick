import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ProductDetail from "./component/product/ProductPage.jsx"
import Home from './pages/Home.jsx'
import ProductPage from "./component/productDetails/productInfoPage.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/Home'} />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Home/Product" element={<ProductDetail />}></Route>
        <Route path="Home/Product/Supplier" element={<ProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App