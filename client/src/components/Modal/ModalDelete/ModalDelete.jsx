import React from 'react';
import Button from '../../Button/Button';
import { useDispatch } from 'react-redux';
import { actionRemoveContact } from '../../../store/actions/actionRemoveContact';
import { hideModal } from '../../../store/actions/actionModal/actionModal';
import './ModalDelete.scss';



const ModalDelete = ({data}) => {
    const {title, id} = data;
    const dispatch = useDispatch();
    const hideModalRemove = () => {
        dispatch(hideModal())
    }
    const removeContact = () => {
       dispatch(actionRemoveContact(id));
       hideModalRemove();
    }
    return (
        <div className="poppup__modal-delete">
            <div className="poppup__wrapper-delete">
              <div className="modal__content">
                  <p className="modal__content-title">
                       Хотите удалить контакт {title}? 
                  </p>
              </div>
              <div className="modal__content-footer">
                 <Button title="Удалить" onClick={removeContact} classnamestyle='deep-orange'/>
                 <Button title="Закрыть" onClick={hideModalRemove}/>
              </div>
            </div> 
        </div>
    )
}
export default ModalDelete;