import React from 'react';
import ContactList from '../components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';


const ContactListContainer = () => {
    const contactData = useSelector((state)=> state.contactReducer.contact);
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const getParamsUrlSearch = searchParams.get('search');

    const filterContacts = getParamsUrlSearch ? contactData.filter((item) => 
    item.title.toLowerCase().includes(getParamsUrlSearch.toLowerCase())) 
    : contactData;
    
    return <ContactList contactData={filterContacts}/>
}
export default ContactListContainer;