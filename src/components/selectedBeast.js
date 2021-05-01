import { Button, Modal } from 'react-bootstrap';

import React from 'react';

class SelectedBeast extends React.Component {
  render() {

    return (
      <>
        
      
        <Modal  show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title  className='newFont' style= {{color:'#D3634B'}}>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body><img width={400} src={this.props.src} alt={this.props.title} name={this.props.disc} /> </Modal.Body>
          {/* <Modal.p> {this.props.title}</Modal.p> */}
          <Modal.Title  className='newwFont'>{this.props.disc}</Modal.Title>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>


      </>
    );



  }


}




export default SelectedBeast;
