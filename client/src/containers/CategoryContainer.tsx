import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { pathTaskEdit } from '../path/path';
import { AppStateType } from '../store/rootReducer/rootReducers';
import Category from '../components/Category/Category';



const CategoryContainer = () => {
    const category = useSelector((state: AppStateType)=> state.categoryReducer.category);
    const match: any = useRouteMatch();
    const pathName: any = match.path;
    const matchTaskId = +match.params.id
    const isPathName = pathName === pathTaskEdit;


    const categoryElements = category.map((item) => {
        return  <Category 
        key={item.categoryId} 
        isPathName={isPathName}
        {...item as any} 
         matchTaskId={matchTaskId}/>
    })
    return <ul className="category__lists"> {categoryElements}</ul>
    
}
export default CategoryContainer;