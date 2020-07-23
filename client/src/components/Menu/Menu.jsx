import React, { useContext } from 'react';
import './Menu.scss';
import Input from '../Input/Input';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

const Menu = () => {
    const url = new URL(window.location.href);
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandle = () => {
        auth.logout();
        history.push('/')
    }
    const onChangeHandle = (event) => {
        const search = url.searchParams.set("search", `${event.target.value}`);
        history.replace(url.search.replace(search));
    }

    return (
        <div className="menu  cyan lighten-2">
            <div className="menu__header">
                <h4 className="menu__header-title">
                    Lists contacts
                  </h4>
            </div>
            <div className="navbar__search">
                <Input 
                onChange={onChangeHandle}
                type="text" 
                placeholder='search contacts' 
                classnamestyle='menu__header-input' />
            </div>
            <div className="navbar">
                <ul className="menu__list">
                    <li className="menu__list-item" onClick={logoutHandle}>
                        Выход
                    </li>
                </ul>
            </div>
        </div>

    )
}
export default Menu;