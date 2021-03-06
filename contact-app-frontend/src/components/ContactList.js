import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const inputEl = useRef("")
    const renderListItems = props.contacts.map((contact) => {  
        
        return(
            <ContactCard contact={contact}/>
        )
    })

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value)
    }
    return(
        <div className='main'>
            <h2>Contact List
                <Link to='/add'>
                    <button className='ui button blue' style={{float: 'right'}}>Add Contact</button>
                </Link>
            </h2>
            <div className='ui search'> 
                <div className='ui icon input'>
                    <input ref={inputEl} type='text' placeholder='Search Contacts' className='prompt' value={props.term} onChange={getSearchTerm}/>
                    <i className='search icon'></i>
                </div>
            </div>
            <div className='ui celled list'>{renderListItems.length > 0 ? renderListItems : 'No Contacts matched'}</div>
        </div>
    )
}

export default ContactList