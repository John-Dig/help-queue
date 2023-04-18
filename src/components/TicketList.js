import React from "react";
import Ticket from "./Ticket";

const mainTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase will not save record. Help'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Prop types are throwing an error.'
  },
  {
    names: 'Elizabeth & Jacob',
    location: '9F',
    issue: 'Child component is not rendering.'
  }
];


      
function TicketList() {
  return (
    <React.Fragment>
      <Ticket
        location='3A'
        names='Thato and Haley'
        issue='Firebase will not save record!' /> {/*these are all props. They can be passed down to child components.*/}
      <Ticket
        location='4B'
        names='Sleater and Kinney'
        issue='Prop types are throwing an error.' />
    </React.Fragment>
  );
}

export default TicketList;
