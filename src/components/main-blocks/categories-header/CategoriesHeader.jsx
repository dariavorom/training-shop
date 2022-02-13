import './categories-header.scss';

const CategoriesHeader = (props) => {
    return (
        <div className={'clothes__top'}>
            <div className="clothes__top-title">
                <h2 className=" title-h2">
                    {props.name}
                </h2>
            </div>
            <div className="clothes__top-tabs tabs">
                <ul className="tabs__list">
                    <li className={'tabs__item active'}>NEW ARRIVALS</li>
                    <li className={'tabs__item'}>SPECIALS</li>
                    <li className={'tabs__item'}>BESTSELLERS</li>
                    <li className={'tabs__item'}>MOST VIEWED</li>
                    <li className={'tabs__item'}>FEATURED PRODUCTS</li>
                </ul>

            </div>

        </div>

    );
}
export default CategoriesHeader;