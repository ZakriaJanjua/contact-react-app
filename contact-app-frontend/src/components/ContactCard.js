import React from 'react'
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
    const {id, name, email} = props.contact

    return(
        <div className='item'>
            <img className='ui avatar image' src='https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png' alt='user' />
            <div className='content'>
                <Link to={{pathname: `/contact/${id}`, state: {contact: props.contact}}}>
                    <div className='header'>
                        {name}
                    </div>
                    <div>{email}</div>
                </Link>
            </div>
            <Link to={{pathname: `/delete/${id}`, state: {contact: props.contact}}}>
                <i className='trash alternate outline icon' style={{color: 'red', marginLeft: '200px', marginTop: '7px'}}/>
            </Link>
            <Link to={{pathname: `/edit`, state: {contact: props.contact}}}>
                <i className='edit alternate outline icon' style={{color: 'blue', marginTop: '7px'}}/>
            </Link>
        </div>
    )
}

export default ContactCard