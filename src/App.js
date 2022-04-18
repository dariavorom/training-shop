import React from "react";
import {Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Main} from './pages/main/main';
import ProductPage from './pages/productPage/productPage';
import ProductsPage from './pages/productsPage/productsPage';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart"
import Loader from "./components/loader/loader";
import Error from "./components/error/error";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import {lockBody} from "./components/functions/lockBody";
import {requestProducts} from "./redux/products/actions";

const App = () => {
    const dispatch = useDispatch();
    const {isLoading, isError} = useSelector(state => state.productsSlice);
    const isCartOpen = useSelector(state => state.cart.isCartOpen);
    useEffect(() => {
        dispatch(requestProducts())
    }, [])
    useEffect(() => {
        lockBody(isCartOpen);
    }, [isCartOpen]);
    return (
        <div className="app" data-test-id="app">
            <ScrollToTop/>
            {isLoading && <Loader/>}
            <Header/>
            {isError && <Error/>}
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
            <Footer/>
            {isCartOpen && <Cart/>}
        </div>
    );
}

export default App;
