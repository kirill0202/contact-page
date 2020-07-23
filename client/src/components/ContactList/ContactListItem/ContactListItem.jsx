import React from 'react';
import './ContactListItem.scss';
import { useDispatch } from 'react-redux';
import { actionRemoveContact } from '../../../store/actions/actionRemoveContact';
import { showModal } from '../../../store/actions/actionModal/actionModal';

const ContatListItem = ({ title, id }) => {
    const dispatch = useDispatch();
    
    const removeContact = () => {
        dispatch(actionRemoveContact(id))
    }
    const openEditModal = () => {
        const nameEdit = {
          name: "modalEdit",
          data: { title, id },
        };
        dispatch(showModal(nameEdit));
      };
    return (
        <div className="contact">
            <div className="contact__wrapper">
                <div className="contact__content">
                    <div className="contact__content-header">
                        {title}
                    </div>
                    <div className="contact__content-footer">
                        <i className="fas fa-trash-alt   footer__icon-remove footer__icon" onClick={removeContact} ></i>
                        <i className="fas fa-user-edit  footer__icon-edit footer__icon" onClick={openEditModal}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContatListItem;
