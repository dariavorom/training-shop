import {useParams} from 'react-router-dom';
import Header from "../../components/header/Header";

const ProductsPage = () => {
    const {path} = useParams();
    return (
        <>
            <Header/>
            <h1>{path}</h1>
        </>

    );
}
export default ProductsPage;