import React from 'react'
import { Link } from 'react-router-dom'

const DeleteContact = (props) => {
    const {id, name} = props.location.state.contact

    return(
        <div className='main'>
            <div className='container'>
                <div className='header'>
                    <h3>{`Are you sure you want to remove contact named ${name}?`}</h3> 
                </div>
                <div className='container' style={{display:'flex', justifyContent: 'center', marginTop: '30px'}}>
                    <Link to='/'>
                        <button className='ui button blue'>Cancel</button>
                        <button className='ui button red' onClick={() => { props.getDeleteContactId(id); alert(name + ' deleted successfully') }}>Yes</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DeleteContact