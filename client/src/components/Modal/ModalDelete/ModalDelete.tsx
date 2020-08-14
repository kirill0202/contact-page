import React, { FC } from 'react';

import { useDispatch } from 'react-redux';
import { hideModal } from '../../../store/actions/actionModal/actionModal';
import { actionRemoveCategory } from '../../../store/actions/actionsCategory/actionRemoveCategory';
import './ModalDelete.scss';
import Button from '../../Button/Button';

type ModalDeleteTypeProps = {
    title: string,
    categoryId: number,
    props: any,
    
}

const ModalDelete: FC<ModalDeleteTypeProps> = ({title, categoryId, props}) => {
    const dispatch = useDispatch();
    const hideModalRemove = () => {
        dispatch(hideModal())
    }
    const removeContact = () => {
       dispatch(actionRemoveCategory(categoryId));
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
                 <Button title="Удалить" onClick={removeContact} classnamestyle='deep-orange' {...props}/>
                 <Button title="Закрыть" onClick={hideModalRemove} {...props}/>
              </div>
            </div> 
        </div>
    )
}
export default ModalDelete;