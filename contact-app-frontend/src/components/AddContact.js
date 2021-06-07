import React, {useState} from 'react'

const AddContact = (props) => {
    const [name, setname] = useState()
    const [email, setemail] = useState()

    const add = (e) => {
        e.preventDefault()
        if (name ===('' || undefined) || email === ('' || undefined)){
            alert('all fields are mendatory')
            return
        }
        props.addContactHandler(name, email) 
        setemail('')
        setname('')
        props.history.push('/')
          
    }

    return(
        <div className='ui main'>
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={add}>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' placeholder='Name' name='name' value={name} onChange={ (e) => {return setname(e.target.value)}}/>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type='text' placeholder='Email' name='email' value={email} onChange={ (e) => {return setemail(e.target.value)}}/>
                </div>
                <button className='ui button blue'>Add</button>
            </form>
        </div>
    )
}

export default AddContact