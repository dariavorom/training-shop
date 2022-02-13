import arrow from './assets/arrow.png';
import filter from './assets/filter.svg';
import viewList from './assets/view-list.svg';
import viewGrid from './assets/view-grid.svg';
import './filter.scss';

const Filter = () => {
    return (
        <div className={'products-filter filter'}>
            <div className="container">
                <div className="filter-wrapper">
                    <div className="filter__item filter__btn">
                        <button>
                            <img src={filter} alt=""/>
                            <span>filter</span>
                        </button>
                    </div>
                    <div className="filter__item filter__view">
                        <button className={'filter__view-list'}>
                            <img src={viewList} alt=""/>
                        </button>
                        <button className={'filter__view-grid'}>
                            <img src={viewGrid} alt=""/>
                        </button>
                    </div>
                    <div className="filter__item filter__sort">
                        <span>BESTSELLERS</span>
                        <img src={arrow} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Filter;