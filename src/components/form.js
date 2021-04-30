
import React from 'react';


class Form extends React.Component {




  render() {
    return (
      <>
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Select number of horns </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="3">All</option>
        </select>

      </>
    );
  }
}
export default Form;
