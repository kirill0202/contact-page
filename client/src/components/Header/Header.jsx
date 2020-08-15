import React, { useContext } from 'react';
import Button from '../Button/Button';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import Search from '../Search/Search';
import './Header.scss';


const Header = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = () => {
        auth.logout();
        history.push('/');
    }
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__search">
                   <Search/>
                </div>
                <div className="header__logout">
                   <Button classnamestyle="header__logout-button" title="Выход" onClick={logoutHandler}/>
                </div>
            </div>
        </header>
    )
}
export default Header;