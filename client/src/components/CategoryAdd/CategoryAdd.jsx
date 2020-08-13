import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { actionAddCategory } from '../../store/actions/actionsCategory/actionAddCategory.ts';
import './CategoryAdd.scss';


const CategoryAdd = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handlerInput = (event) => {
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
          onChange={handlerInput}/>
         <Button title="Add" 
         classnamestyle="category__button" 
         onClick={addNewCategory}/>
       </div>
    )
}
export default CategoryAdd;
