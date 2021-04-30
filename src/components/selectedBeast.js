import { Button, Modal } from 'react-bootstrap';

import React from 'react';

class SelectedBeast extends React.Component {
  render() {

    return (
      <>
        
        

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
