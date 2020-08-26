import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { pathTaskEdit } from '../path/path';
import Category from '../components/Category/Category';



const CategoryContainer = () => {
    const category = useSelector((state)=> state.categoryReducer.category);
    const match = useRouteMatch();
    const pathName = match.path;
    const matchTaskId = +match.params.id
    const isPathName = pathName === pathTaskEdit;


    const categoryElements = category.map((item) => {
        return  <Category 
        key={item.categoryId} 
        isPathName={isPathName}
        {...item} 
         matchTaskId={matchTaskId}/>
    })
    return <ul className="category__lists"> {categoryElements}</ul>
    
}
export default CategoryContainer;