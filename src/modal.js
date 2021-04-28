import Modal from 'react-bootstrap/Modal';

import React from 'react';

class Modal extends React.Component {
    render() {

        return (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>

                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog >

        )



    }


}




export default Modal;