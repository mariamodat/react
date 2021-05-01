import React from 'react';
import HornedBeast from './hornedBeast';
import dataJson from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {




  render() {


    return (
      <CardColumns>
        {dataJson.map(horn => {

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


