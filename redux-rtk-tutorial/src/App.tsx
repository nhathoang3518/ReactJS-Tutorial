import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useContactsQuery, useContactQuery, useAddContactMutation, useUpdateContactMutation, useDeleteContactMutation } from './service/contactsApi';

function App() {
  const {data, error,isLoading, isFetching, isSuccess} = useContactsQuery();
  return (
    <div className="App">
      <h1>React Redux Toolkit RTK Query Tutorial </h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map(contact => {
            return <div className='data' key={contact.id}>
              <span>
                {contact.name}
              </span>
              <span>
                <ContactDetail id={contact.id}/>
              </span>
              </div>
          })}
        </div>
      )}
      <div><AddContact/></div>
    </div>
  );
}
export const ContactDetail = ({id}:{id: string}) => {
  const {data} = useContactQuery(id)
  return (
    <pre>
      {JSON.stringify(data,undefined,2)}
    </pre>
  )
}
export const AddContact = () => {
  const  [addContact] = useAddContactMutation()
  const contact = {
    "id": "100",
    "name": "Hoang",
    "email": "nguyennhathoang35@gmail.com"
  };
  const contactUpdate = {
    "id": "3",
    "name": "Maximum New",
    "email": "max@yahoo.com"
  };
 
  const [updateContact] = useUpdateContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  const addHandler = async() =>{
   await addContact(contact)
  }
  const updateHandler = async () => {
    await updateContact(contactUpdate);
  }
  const deleteHandler = async () => {
    await deleteContact(contact.id);
  }
  return(
    <>
    <button onClick={addHandler}>Add Contact</button>
    <button onClick={ updateHandler }>Update Contact</button>
      <button onClick={ deleteHandler }>Delete Contact</button>
    </>
  )
}

export default App;
