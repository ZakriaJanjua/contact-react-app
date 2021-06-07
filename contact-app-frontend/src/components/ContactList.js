import React from 'react'
import {Link} from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    
    const renderListItems = props.contacts.map((contact) => {  
        
        return(
            <ContactCard contact={contact}/>
        )
    })
    return(
        <div className='main'>
            <h2>Contact List
                <Link to='/add'>
                    <button className='ui button blue' style={{float: 'right'}}>Add Contact</button>
                </Link>
            </h2>
            <div className='ui celled list'>{renderListItems}</div>
        </div>
    )
}

export default ContactList