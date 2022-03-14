import {Main} from './pages/main-page/main';
import ProductPage from './pages/product-page/productPage';
import ProductsPage from './pages/products-page/productsPage';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/cart"
import {useEffect, useState} from "react";

const App = () => {
    const [isCartOpen, toggleCart] = useState(false);
    function toggleCartMode() {
        toggleCart(!isCartOpen);
    }
    function toggleCartOutSide () {
        if(isCartOpen) {
            toggleCartMode()
        }
    }
    useEffect(() => {
        document.body.classList.add(`${isCartOpen ? 'lock' : 'unlock'}`);
        return () => {
            document.body.classList.remove('lock');
        };
    }, [isCartOpen]);
    return (
        <div className="app" data-test-id="app">
            <Header toggleCartMode={toggleCartMode}/>
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
            <Cart isCartOpen={isCartOpen} toggleCartMode={toggleCartMode}/>
        </div>
    );
}

export default App;
