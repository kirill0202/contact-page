import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryEdit from '../CategoryEdit/CategoryEdit';
import './Category.scss';




type CategoryPropsType = {
    title: string ,
    categoryId: number, 
    isPathName: string, 
    matchTaskId: number,
    props: any,
}

const Category: React.FC<CategoryPropsType> = ({title, categoryId, isPathName, matchTaskId, props})=> {
 
    return (
        <>
       {isPathName ? <CategoryEdit title={title} categoryId={categoryId} matchTaskId={matchTaskId} props={props}/> 
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