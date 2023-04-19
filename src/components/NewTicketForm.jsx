import React from 'react';
import PropTypes form 'prop-types'

https://www.learnhowtoprogram.com/react/react-fundamentals/passing-data-via-callbacks#:~:text=Step%204%3A%20Pass%20Method%20Down%20to%20Child%20Component%20as%20a%20Prop
function NewTicketForm() {

  function handleNewTicketFormSubmission(e) {
    e.preventDefault();
    console.log(e.target.names.value)
    console.log(e.target.location.value)
    console.log(e.target.issue.value)
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );


}
export default NewTicketForm;