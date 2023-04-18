import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }
// TRY THIS OUT: https://www.learnhowtoprogram.com/react/react-fundamentals/updating-state-with-events#:~:text=We%20recommend%20experimenting%20with%20adding%20counters%2C%20booleans%2C%20and%20other%20states%20that%20need%20updating%20to%20your%20applications%20to%20get%20more%20practice%20with%20this%20slightly%20more%20complex%20implementation%20of%20setState().
  handleClick = () => { //look at this closely
    this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList />
    buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;