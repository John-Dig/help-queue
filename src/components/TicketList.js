import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types"; //PropTypes is a library to help with type-checking




      
function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket,index) => //loop 
      <ticket names={ticket.names}
      location={ticket.location}
      issue={ticket.issue}
      key={index} />
      )}
    </React.Fragment>
  );
}

// Add propTypes for ticketList.
TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
