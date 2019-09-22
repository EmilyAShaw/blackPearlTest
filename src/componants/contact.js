import React, { Component } from "react";
import PropTypes from "prop-types";



function myFunction(){
  document.getElementsByClassName("clickedButton").style.color = "white";
}
function Contact(props) {
  return (
    <div className="contact">
      <button class = 'clickedButton' onclick="myFunction()">
      <span>{props.name}</span>
      </button>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
};

export default Contact;