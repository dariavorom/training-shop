import './App.css';
import {Main} from './pages/main-page/main';
import ProductPage from './pages/product-page/productPage';
import ProductsPage from './pages/products-page/productsPage';
import {Routes, Route, Link} from "react-router-dom";

const App = () => {
    return (
        <div className="app" data-test-id="app">
            <Routes>
                <Route index element={<Main/>}/>
                <Route exact path="/:path" element={<ProductsPage/>}/>
                <Route exact path="/:productType/:path" element={<ProductPage/>}/>
                <Route exact path="/about-us/" element={<Main/>}/>
                <Route exact path="/beauty/" element={<Main/>}/>
                <Route exact path="/accessories/" element={<Main/>}/>
                <Route exact path="/blog/" element={<Main/>}/>
                <Route exact path="/contact/" element={<Main/>}/>
                <Route exact path="/faq/" element={<Main/>}/>
            </Routes>
        </div>
    );
}

export default App;
