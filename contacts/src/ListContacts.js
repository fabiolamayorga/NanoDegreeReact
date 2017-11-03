import React, { Component } from 'react'


function ListContacts(props) { //Stateless Functional Components
  return (
    <ol className='contact-list'>
      {props.contacts.map((contact) => (
        <li key = {contact.id}>
          <div className='contact-avatar' style={{
            backgroundImage: `url(${contact.avatarURL})`
          }}/>
          <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
          <button onClick={() => props.onDeleteContact(contact)} className='contact-name'>
            Remove
          </button>
        </li>
      ))}
    </ol>

  )
}


export default ListContacts
