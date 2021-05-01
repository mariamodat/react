
import React from 'react';
import dataJson from './data.json';
import Form from 'react-bootstrap/Form';


class Myform extends React.Component {


  update = event => {
    let beasts = dataJson;
    let numberOfHorns = event.target.value;
    if (numberOfHorns) {
      beasts.filter(beast => {
        return beast.horns === numberOfHorns;
      });
      console.log('selected horns value',event.target.value);
    }
    this.props.updateHorns(beasts);
  }

  render() {
    return (
      <>
        <h2 className='select'>select number of Horns you want to preview</h2>
        <Form.Control  className='select' onChange={this.update} as="select" size="lg">
          <option value='all'>all</option>
          <option value='1'>1</option>
          <option value='2'> 2</option>
          <option value='3'>3</option>
        </Form.Control>
        <br />
        <hr />








        {/* <select onChange={this.update} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Select number of horns </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="3">All</option>
        </select> */}

      </>
    );
  }
}
export default Myform;
