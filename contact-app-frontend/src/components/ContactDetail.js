import React from 'react'
import {Link} from 'react-router-dom'

const ContactDetail = (props) => {
    const {name, email} = props.location.state.contact
    return(
        <div className='main'>
            <div className='ui card centered'>
                <div className='image'>
                    <img src='https://assets.webiconspng.com/uploads/2016/12/User-Icon.png' alt='user'/>
                </div>
                <div className='content'>
                    <div className='header'>
                        {name}
                    </div>
                    <div className='description'>
                        {email}
                    </div>
                </div>
            </div>
            <Link to='/'> 
                <button className='ui button blue' style={{marginLeft: '475px'}}>
                    Back to Contact List
                </button>
            </Link>
        </div>
    )
}

export default ContactDetail