import React from 'react';
import './ContactListItem.scss';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../store/actions/actionModal/actionModal';

const ContatListItem = ({ title, id }) => {
    const dispatch = useDispatch();
    
    const openEditModal = () => {
        const nameEdit = {
          name: "modalEdit",
          data: { title, id },
        };
        dispatch(showModal(nameEdit));
      };
      const openRemoveModal = () => {
        const nameRemove = {
          name: "modalRemove",
          data: { title, id },
        };
        dispatch(showModal(nameRemove));
      };
    return (
        <div className="contact">
            <div className="contact__wrapper">
                <div className="contact__content">
                    <div className="contact__content-header">
                        {title}
                    </div>
                    <div className="contact__content-footer">
                        <i className="fas fa-trash-alt   footer__icon-remove footer__icon" onClick={openRemoveModal} ></i>
                        <i className="fas fa-user-edit  footer__icon-edit footer__icon" onClick={openEditModal}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContatListItem;
