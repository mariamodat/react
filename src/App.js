import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

// import Card from 'react-bootstrap/Card';

import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Modal />
        <Footer />
      </div>
    );
  }
}

export default App;
