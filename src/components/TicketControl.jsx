import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mainTicketList: [],
      counter: 0
    };
  }


  handleAddingNewTicketToList = (newTicket) => { // add ticket
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({
      mainTicketList: newMainTicketList,
      formVisibleOnPage: false
    });
  }

  handleClick = () => {
    if (this.state.counter === 4) {
      this.setState((prevState) => ({
        counter: prevState.counter - 4
      }));
    }
    else {

      this.setState((prevState) => ({
        counter: prevState.counter + 1
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let pText = null;
    if (this.state.counter === 0 || this.state.counter === 4) {
      buttonText = "Add Ticket";
    }
    if (this.state.counter === 1) {
      pText = "Have you gone through all the steps on the Learn How to Program debugging lesson?";
      buttonText = "Click to continue";
    }
    if (this.state.counter === 2) {
      pText = "Have you asked another pair for help?";
      buttonText = 'Click to continue';
    }
    if (this.state.counter === 3) {
      pText = "Have you spent 15 minutes going through the problem documenting every step?";
      buttonText = "Click to continue";
    }
    if (this.state.counter === 4) {
      buttonText = "Click to add your ticket and return to Ticket List"
      //currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} />;
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} /> 
    }
    //if (this.state.formVisibleOnPage) {
    //  buttonText = 'Return to Ticket List';
    //}

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <p>{pText}</p>
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;

