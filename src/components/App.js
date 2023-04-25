import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import '../App.css';
https://www.learnhowtoprogram.com/react/react-with-redux/introduction-to-react-redux-library#:~:text=and%20loosely%20coupled.-,dispatch(),is%20the%20case%20for%20both%20Redux%20and%20for%20the%20React%20Redux,-library.%20The%20code
function App(){
  return (
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
} 

export default App;