import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import logo from "./logo.svg";
import "./App.css";
import './index.css';

import ContactList from "./componants/contactlist";
import Sidebarlist from "./componants/sidebarlist";


const contacts = [
  { id: 1, name: "Arya Stark", Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 2, name: "Sansa Stark", Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 3, name: "Bran Stark", Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 4, name: "Rob Stark",Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 5, name: "Jon Snow",Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 6, name: "Joffrey Baratheon", Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 7, name: "Danyerys Targaryen",Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 8, name: "Gregor Clegane", Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 8, name: "Tyrion Lannister", Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 8, name: "Cersei Lannister", Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 8, name: "Khal Drogo", Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 8, name: "Ramsay Bolton", Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 8, name: "Theon Greyjoy", Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
  { id: 8, name: "Jorah Mormont", Address_Line_1: "Red Keep", Address_Line_2: "Kings Landing", Phone: "06 384 3456", Mobile: "021 9543 151"},
];

class App extends Component {
  
  render() {
    return (



      
      <div className="App">
        <header className="App-header">
        
          <h1 >React Contact Manager</h1>
        </header>

        <ContactList contacts={contacts} />
        <Sidebarlist contacts={contacts} />
        <Sidebarlist contacts={contacts} />
       

      </div>
    );
  }
}

export default App;

