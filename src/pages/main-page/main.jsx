import {Banner} from "../../components/main-blocks/banner/Banner";
import './main.scss';
import {Benefits} from "../../components/main-blocks/benefits/Benefits";
import WomenClothes from '../../components/main-blocks/women-clothes/WomenClothes';
import MenClothes from "../../components/main-blocks/men-clothes/menClothes";
import Offers from "../../components/main-blocks/offers/Offers";
import Subscribe from "../../components/main-blocks/subscribe/Subscribe";
import LatestFromBlog from "../../components/main-blocks/latest-from-blog/LatestFromBlog";
import ScrollToTop from "../../components/scrolltotop/ScrollToTop";


const Main = () => {
    return (
        <>
            <ScrollToTop/>
            <Banner/>
            <Benefits/>
            <WomenClothes/>
            <MenClothes/>
            <Offers/>
            <Subscribe/>
            <LatestFromBlog/>
        </>
    );
}
export {Main};