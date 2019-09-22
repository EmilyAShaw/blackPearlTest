import React from "react";

// import the Contact component
import Sidebar from "./sidebar";


function Sidebarlist(props) {
  return (
    <div>
      {props.contacts.map(conts => <Sidebar key={conts.id} name={conts.name} Address_Line_1={conts.Address_Line_1} Address_Line_2={conts.Address_Line_2} Phone={conts.Phone} Mobile={conts.Mobile} Email={conts.email}/>)}
      {/* {props.contacts.map(c => <Sidebar key={c.id} name={c.Address_Line_2} />)} */}
     </div> 
  ); 
} 

export default Sidebarlist;