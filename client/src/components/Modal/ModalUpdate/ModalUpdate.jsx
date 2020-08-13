import React, { useState } from 'react';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../../store/actions/actionModal/actionModal.ts';
import { actionUpdateCategory } from '../../../store/actions/actionsCategory/actionUpdateCategory.ts';
import './ModalUpdate.scss';

const ModalUpdate = ({data}) => {
    const {title, id} = data;
    const dispatch = useDispatch();
    const [valueInput, setValueInput] = useState(title);

    const hideModalWindow = () => {
        dispatch(hideModal())
    }
    const onChangeHandle = (e) => {
        setValueInput(e.target.value);
    }
    const updateContact = () => {
      const updateDataContact = {
          title:valueInput,
          id
      }
      dispatch(actionUpdateCategory(updateDataContact));
      hideModalWindow();
    }
    return (
        <div className="poppup">
            <div className="poppup__modal">
                <div className="poppup__wrapper">
                   <div className="poppup__modal-content">
                     <Input 
                     placeholder='update contact' 
                     value={valueInput} 
                     onChange={onChangeHandle}/>
                   </div>
                    <div className="poppup__footer-modal">
                        <Button title='Сохранить'onClick={updateContact} classnamestyle={'cyan accent-3'}/>
                        <Button title='Закрыть' onClick={hideModalWindow} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalUpdate;