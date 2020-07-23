import React from 'react';
import Menu from '../components/Menu/Menu';
import ContactsAdd from '../components/ContactsAdd/ContactsAdd';
import ContactListContainer from '../containers/ContactListContainer';


const HomePage = () => {
    return (
        <>
           <Menu/>
           <ContactsAdd/>
           <ContactListContainer/>
    
        </>
    )
}
export default HomePage;
