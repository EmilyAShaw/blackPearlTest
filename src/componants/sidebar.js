import React, { Component } from "react";
import PropTypes from "prop-types";

import mailBanner from './mailBanner.png';


function Sidebar(props) {
  return (
    <div className="sidePannel">
      <div className="sidebar">
    <p class = 'headingForm'>
      
        <span>{props.name}</span>
        
    </p>

    <p class = 'classSpan'>
    Address Line 1:
    </p>

    <p class = 'form'>
       <span>{props.Address_Line_1}</span>
       </p>

    <p class = 'classSpan'>
    Address Line 2: 
    </p>
    <p class = 'form'>
    <span>{props.Address_Line_2}</span>
    </p>

    <p class = 'classSpan'>
    Phone: 
    </p>

    <p class = 'form'><span>{props.Phone}</span></p>

    <p class = 'classSpan'>
    Mobile: 
    </p>

    <p class = 'form'><span>{props.Mobile}</span></p>

    <p class = 'classSpan'>
    Banner: 
    </p>

    <p class = 'banner'>On</p>
    <p class = 'bannerBlack'>Off</p>
    </div>

    <div class = "bannerbar">
      
    <p class = 'headingForminBanner'>
      
    Signature Preview
      
  </p>
  <div className = 'sigSect'>

  <p class = 'classSpanBanner'>
  <b><span>{props.name}</span></b>
    </p>

  <p class = 'classSpanBanner'>
  <span>{props.Address_Line_1}</span>
    </p>

   

    <p class = 'classSpanBanner'>
    <span>{props.Address_Line_2}</span>
    </p>
   

    <p class = 'classSpanBanner'>
    <b>P</b> <span>{props.Phone}</span>
    </p>

  

    <p class = 'classSpanBanner'>
   <b>M</b> <span>{props.Mobile}</span>
    </p>


    </div>

    <img src = {mailBanner}></img>
    </div>
 
    </div>
    
  );
}
function Sidebar2(props) {
  return (
    <div className="sideBar">
    <p class = 'headingForm'>
      
        <span>{props.name}</span>
        
    </p>

    <p class = 'classSpan'>
    Address Line 1:
    </p>

    <p class = 'form'>
       <span>{props.Address_Line_1}</span>
       </p>

    <p class = 'classSpan'>
    Address Line 2: 
    </p>
    <p class = 'form'>
    <span>{props.Address_Line_2}</span>
    </p>

    <p class = 'classSpan'>
    Phone: 
    </p>

    <p class = 'form'><span>{props.Phone}</span></p>

    <p class = 'classSpan'>
    Mobile: 
    </p>

    <p class = 'form'><span>{props.Mobile}</span></p>

    <p class = 'classSpan'>
    Banner: 
    </p>

    <p class = 'banner'>On</p>
    
    
    </div>
   
    
  );
}

Sidebar.propTypes = {
    name: PropTypes.string.isRequired
  };

export default Sidebar;


// import React, { Component } from "react";
// import PropTypes from "prop-types";
// function Contact(props) {
//   return (
//     <div className="contact">
//       <span>{props.name}</span>
//     </div>
//   );
// }

// Contact.propTypes = {
//   name: PropTypes.string.isRequired
// };

// export default Contact;