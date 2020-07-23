import React from  'react';
import { useSelector } from 'react-redux';
import ModalUpdate from './ModalUpdate/ModalUpdate';
import ModalDelete from './ModalDelete/ModalDelete';


const modalCollection = {
      modalEdit: ModalUpdate,
      modalRemove: ModalDelete,
  };

const Modal = () => {
    const modalWindow = useSelector((state) => state.modal);
    if (!modalWindow.length) {
        return null;
      }
    return <>
      {modalWindow.map((modal) => {
        const CurrentModal = modalCollection[modal.name];
        return <CurrentModal {...modal} key={modal.name} />;
      })}
    </>
}
export default Modal;