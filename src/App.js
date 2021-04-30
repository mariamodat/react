import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataJson from './components/data.json';
import SelectedBeast from './components/selectedBeast';
import Form from './components/form';


// import Card from 'react-bootstrap/Card';

import React from 'react';
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      data: dataJson,
      show: false,
      horns: '',
      src: '',
      discription: '',

    };

  }
  // filterFuc = ()=> {
  //   this.setState({


  //   })
  // }



  selectFunc = (e) => {
    this.setState({
      horns: e.target.horns,
    });
  }

  clickFunc = (event) => {
    this.setState({
      src: event.target.src,
      title: event.target.alt,
      show: true,
      discription: event.target.name,
    });
    console.log(event.target);
  };
  closeFunc = () => this.setState({ show: false });
  showFunc = () => this.setState({ show: true });






  render() {
    return (
      <div>
        <Header />
        <Form />
        <SelectedBeast close={this.closeFunc}
          open={this.showFunc}
          show={this.state.show}
          src={this.state.src}
          disc={this.state.discription} />
        <Main clickFunc={this.clickFunc} />

        <Footer />
      </div>
    );
  }
}

export default App;
