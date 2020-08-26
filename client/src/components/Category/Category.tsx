import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryEdit from '../CategoryEdit/CategoryEdit';
import './Category.scss';




type CategoryPropsType = {
    name: string ,
    id: number, 
    isPathName: boolean, 
    matchTaskId: number,
    props: any,
    taskId: number
}

const Category: React.FC<CategoryPropsType> = ({name, id, isPathName, matchTaskId, props, taskId })=> {
 
    return (
        <>
       {isPathName ? <CategoryEdit title={name} categoryId={id} matchTaskId={matchTaskId} props={props} taskId={taskId}/> 
          : <li 
            className="category__lists-item">
            <NavLink activeClassName="active__category"
            className="category__link"
             to={`/home/category/${id}`}>
                 {name}
            </NavLink>
        </li>}
        </>
    )
}
export default Category;