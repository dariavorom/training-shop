import {Link, useParams} from "react-router-dom";
import classes from './menu.scss';
import {MENU} from '../../constants/menu';

const Menu = () => {
        const params = useParams();
    return (
        <div className='menu' data-test-id='menu'>
            {MENU.map(({id, path, name}) => (
                <Link key={id} to={`/${path}`} data-test-id={`menu-link-${path}`} className={'menu-item'}>
                    <span>{name}</span>
                </Link>
            ))}
        </div>
    );
}
export default Menu;