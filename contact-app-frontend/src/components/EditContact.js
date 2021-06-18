import React, {useState} from 'react'

const EditContact = (props) => {
    const {id, name, email} = props.location.state.contact
    const [getname, setname] = useState(name)
    const [getemail, setemail] = useState(email)
    const update = (e) => {
        e.preventDefault()
        if (name ===('' || undefined) || email === ('' || undefined)){
            alert('all fields are mendatory')
            return
        }
        props.updateContactHandler(getname, getemail, id) 
        setemail('')
        setname('')
        props.history.push('/')
          
    }

    return(
        <div className='ui main'>
            <h2>Edit Contact</h2>
            <form className='ui form' onSubmit={update}>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' placeholder='Name' name='name' value={getname} onChange={ (e) => { return setname(e.target.value)}}/>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type='text' placeholder='Email' name='email' value={getemail} onChange={ (e) => { return setemail(e.target.value)}}/>
                </div>
                <button className='ui button blue'>Edit</button>
            </form>
        </div>
    )
}

export default EditContact