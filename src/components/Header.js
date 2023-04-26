import React from "react";
import ticketsImage from './../img/tickets-image.png'

function Header(){
  return (
    <React.Fragment>
      <img src={ticketsImage} alt='An image of tickets' />
    </React.Fragment>
  );
}

export default Header;
https://www.learnhowtoprogram.com/react/react-with-redux/adding-combined-reducers-to-react#:~:text=3.%20Remove%20formVisibleOnPage%20State%20From%20TicketControl.js