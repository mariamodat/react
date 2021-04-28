import { Button, Modal } from 'react-bootstrap';

import React from 'react';

class SelectedBeast extends React.Component {
  render() {

    return (
      <>
        {/* <Modal.Dialog show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.disc} </Modal.Title>

          </Modal.Header>

          <Modal.Body>
            <img width={400} src={this.props.src} alt='the horn img' /> </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.close} variant="secondary">Close</Button>
            <Button onClick={this.props.open} variant="primary">ok</Button>
          </Modal.Footer>
        </Modal.Dialog > */}


        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body><img width={400} src={this.props.src} alt='the horn img' /> </Modal.Body>

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
