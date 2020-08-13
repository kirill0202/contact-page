import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryEdit from '../CategoryEdit/CategoryEdit';
import './Category.scss';

const Category = ({title, categoryId, isPathName, matchTaskId}) => {
 
    return (
        <>
       {isPathName ? <CategoryEdit title={title} categoryId={categoryId} matchTaskId={matchTaskId}/> 
          : <li 
            className="category__lists-item">
            <NavLink activeClassName="active__category"
            className="category__link"
             to={`/home/category/${categoryId}`}>
                 {title}
            </NavLink>
        </li>}
        </>
    )
}
export default Category;