
import React from 'react';
// import dataJson from './data.json';
import Form from 'react-bootstrap/Form';



class Myform extends React.Component {


  // update = event => {
  //   let beasts = dataJson;
  //   let numberOfHorns = event.target.value;
  //   if (numberOfHorns) {
  //     beasts.filter(beast => {
  //       return beast.horns === numberOfHorns;
  //     });
  //     console.log('selected horns value ',event.target.value);
  //   }
  //   this.props.updateHorns(beasts);
  // }

  render() {
    return (
      <>
        <h2 className='select'>select number of Horns you want to preview</h2>
        <Form.Control  className='select' onChange={this.props.hornsFunc} as="select" size="lg">
          <option value='All'>All</option>
          <option value='1'>1</option>
          <option value='2'> 2</option>
          <option value='3'>3</option>
          <option value='100'>100</option>
        </Form.Control>
        <br />
        <hr />

      </>
    );
  }
}
export default Myform;
