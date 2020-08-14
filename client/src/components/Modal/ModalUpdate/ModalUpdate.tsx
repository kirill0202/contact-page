import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../../store/actions/actionModal/actionModal';
import { actionUpdateCategory } from '../../../store/actions/actionsCategory/actionUpdateCategory';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import './ModalUpdate.scss';


type modalUpdateTypeProps = {
    title: string,
    id: number,
    props: any
}
const ModalUpdate: FC<modalUpdateTypeProps> = ({title, id, props}) => {
    const dispatch = useDispatch();
    const [valueInput, setValueInput] = useState(title);

    const hideModalWindow = () => {
        dispatch(hideModal())
    }
    const onChangeHandle = (e:any): void => {
        setValueInput(e.target.value);
    }
    const updateContact = () => {
      const updateDataContact:any = {
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
                     {...props}
                     onChange={onChangeHandle}/>
                   </div>
                    <div className="poppup__footer-modal">
                        <Button title='Сохранить'
                         {...props}
                         onClick={updateContact}
                         classnamestyle={'cyan accent-3'}/>
                        <Button 
                        {...props}
                        title='Закрыть' 
                        onClick={hideModalWindow} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalUpdate;