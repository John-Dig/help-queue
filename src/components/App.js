import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import '../App.css';

function App(){
  return (
    <React.Fragment>
      <Header />
      <TicketList />
    </React.Fragment>
  );
} 

export default App;