import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail'
import DeleteContact from './DeleteContact'
import api from '../api/contacts'
import { uuid } from 'uuidv4';

function App() {

  // const LOCAL_STORAGE_KEY = 'contacts_key'
  const [contacts, setContact] = useState([])

  const contactHandler = async (name, email) => {

    const request = {
      id: uuid(),
      name: name,
      email: email
    }

    const response = await api.post("/contacts", request)
    console.log(response)
    setContact([...contacts, response.data])
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContact(newContactList)
  }

  //Retrieve Contacts
  const retrieveContacts = async () => {
    const response = await api.get('/contacts')
    return response.data
  }

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if (retrieveContacts) setContact(retrieveContacts)

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts()
      if (allContacts) setContact(allContacts)
    }

    getAllContacts()
  }, [])

  useEffect(() => {
   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact render={ (props) => <ContactList {...props} contacts={contacts} />}/>
          <Route path='/add' render={ (props) => <AddContact {...props} addContactHandler={contactHandler} />}/>
          <Route path='/contact/:id' component={ContactDetail}/>
          <Route path='/delete/:id' render={(props) => <DeleteContact {...props} getDeleteContactId={removeContactHandler} />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
