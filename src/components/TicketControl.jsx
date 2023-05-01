// import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';

// class TicketControl extends React.Component {
function TicketControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);// new for hooks 
  const [mainTicketList, setMainTicketList] = useState([]);

  const handleClick = () => {
    if (this.state.selectedTicket != null) {
      setFormVisibleOnPage(false);// new for hooks
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
      });
    } else {
      setFormVisibleOnPage(!formVisibleOnPage); //new for hooks
    }
  }


  const handleDeletingTicket = (id) => {
    const newMainTicketList = mainTicketList.filter(ticket => ticket.id !== id);
    setMainTicketList(newMainTicketList);
  }


  const handleEditClick = () => {
    this.setState({ editing: true });
  }


  const handleEditingTicketInList = (ticketToEdit) => { //handles ADD AND EDIT
    const editedMainTicketList = mainTicketList.filter(ticket => ticket.id !== this.state.selectedTicket.id).concat(ticketToEdit);
    setMainTicketList(editedMainTicketList);
  }

  const handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = mainTicketList.concat(newTicket);
    setMainTicketList(newMainTicketList);
    setFormVisibleOnPage(false)//new for hooks
  }

  const handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.props.mainTicketList[id];
    this.setState({ selectedTicket: selectedTicket });
  }

  let currentlyVisibleState = null;
  let buttonText = null;
  if (this.state.editing) {
    currentlyVisibleState = <EditTicketForm ticket={this.state.selectedTicket} onEditTicket={this.handleEditingTicketInList} />
    buttonText = "Return to Ticket List";
  } else if (this.state.selectedTicket != null) {
    currentlyVisibleState = <TicketDetail
      ticket={this.state.selectedTicket}
      onClickingDelete={this.handleDeletingTicket}
      onClickingEdit={this.handleEditClick} />
    buttonText = "Return to Ticket List";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
    buttonText = "Return to Ticket List";
  } else {
    currentlyVisibleState = <TicketList onTicketSelection={this.handleChangingSelectedTicket} ticketList={mainTicketList} />;
    buttonText = "Add Ticket";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

export default TicketControl;

https://www.learnhowtoprogram.com/react/react-with-nosql/refactoring-help-queue-to-use-hooks#:~:text=default%20TicketControl%3B-,Updating%20the%20formVisibleOnPage%20State,-We%27ll%20finish%20our