import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useHistory } from 'react-router-dom';
import './Search.scss';
import { useState } from 'react';

const Search = () => {
    const url = new URL(window.location.href);
    const [value, setVaule] = useState('');
    const history = useHistory();

    const onChangeHandle = (event) => {
        setVaule(event.target.value);
    }
    const searchHandler = () => {
        const search = url.searchParams.set("search", `${value}`);
        history.replace(url.search.replace(search));
        setVaule('');
    }
    return (
        <div className="search">
            <Input placeholder="search" classnamestyle="search__input" value={value} onChange={onChangeHandle} />
            <Button title="search" classnamestyle="search__button" onClick={searchHandler} />
        </div>
    )
}
export default Search;