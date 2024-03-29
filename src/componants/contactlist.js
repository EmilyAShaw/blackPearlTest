import React from "react";

// import the Contact component
import Contact from "./contact";


function ContactList(props) {
  return (
    <div>
      {props.contacts.map(c => <Contact key={c.id} name={c.name} />)}
     </div> 
  ); 
} 

export default ContactList;