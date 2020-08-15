import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { actionAddCategory } from '../../store/actions/actionsCategory/actionAddCategory';
import Input from '../Input/Input';
import './CategoryAdd.scss';
import Button from '../Button/Button';


type CategoryAddType = {
    props: any
}

type addNewCategoryType = {
    title: string,
    categoryId: number
}
const CategoryAdd: FC<CategoryAddType & addNewCategoryType> = ({props}) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handlerInput = (event: any): void => {
         setValue(event.target.value)
    }
    const addNewCategory = () => {
        const newCategory = {
            title: value,
            categoryId: Date.now()
        }
        dispatch(actionAddCategory(newCategory));
        setValue('');
    }
    return (
       <div className="category__content">
         <Input placeholder="category add" 
          classnamestyle="category__input" 
          value={value} 
          {...props}
          onChange={handlerInput}/>
         <Button 
         title="Add" 
         classnamestyle="category__button" 
         {...props}
         onClick={addNewCategory}/>
       </div>
    )
}
export default CategoryAdd;
