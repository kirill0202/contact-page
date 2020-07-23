import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './ContactsAdd.scss';
import { actionAddContact } from '../../store/actions/actionAddContact';



const ContactsAdd = () => {
    const [valueInput, setValueInput] = useState('');
    const dispatch = useDispatch();
 

    const onChangeHandle = (e) => {
        setValueInput(e.target.value);
        
    }
    const handleAddContanct = () => {
        const newContact = {
            title: valueInput,
            id: Date.now()
        }
        setValueInput('');
        dispatch(actionAddContact(newContact));
    }
    return (
        <section className="section">
            <div className="section__content">
                <Input placeholder="entered value" classnamestyle="section__content-input" value={valueInput} onChange={onChangeHandle}/>
                <Button title='add contact' onClick={handleAddContanct}/>
            </div>
        </section>
    )
}
export default ContactsAdd;