import React from 'react';
import ContatListItem from './ContactListItem/ContactListItem';
import './ContactList.scss';




const ContactList = ({ contactData }) => {
    const contactElement = contactData.map((item) => {
        return (
            <li key={item.id} className="contact__list-item">
                <ContatListItem {...item}/>
            </li>
        )
    })
    return (
        <ul className="contact__list">
            {contactElement}
        </ul>
    )
}
export default ContactList;