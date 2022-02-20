import {Main} from './pages/main-page/main';
import ProductPage from './pages/product-page/productPage';
import ProductsPage from './pages/products-page/productsPage';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div className="app" data-test-id="app">
            <Header />
            <Routes>
                <Route index element={<Main/>}/>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/:productType" element={<ProductsPage/>}/>
                <Route exact path="/:productType/:path" element={<ProductPage/>}/>
                <Route exact path="/about-us/" element={<Main/>}/>
                <Route exact path="/beauty/" element={<Main/>}/>
                <Route exact path="/accessories/" element={<Main/>}/>
                <Route exact path="/blog/" element={<Main/>}/>
                <Route exact path="/contact/" element={<Main/>}/>
                <Route exact path="/faq/" element={<Main/>}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
