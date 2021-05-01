import React from 'react';
import HornedBeast from './hornedBeast';
import dataJson from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';
import Myform from './form';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };

  }

  filterFunc = (e) => {
    if (e.target.value === 'All') {
      this.setState({
        data: dataJson

      });
    }
    else if (e.target.value === 1) {
      this.setState({
        data: dataJson.filter(horn => {
          return horn.horns === 1;
        })
      });
    }

    else if (e.target.value === 2) {
      this.setState({
        data: dataJson.filter(horn => {
          return horn.horns === 2;
        })
      });
    }

    else if (e.target.value === 3) {
      this.setState({
        data: dataJson.filter(horn => {
          return horn.horns === 3;
        })
      });
    }
    // console.log('dataJason.horns', dataJson.horns);

    console.log(this.state.data);
  }



  render() {


    return (
      <CardColumns>
        {this.state.data.map(horn => {

          return (


            <HornedBeast img={horn.image_url}
              title={horn.title}
              horns= {horn.horns}
              disc={horn.description}
              clickFunc={this.props.clickFunc} />






          );
        })}
      </CardColumns>

    );
  }

}


export default Main;


