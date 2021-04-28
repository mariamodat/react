import React from 'react';
import HornedBeast from './hornedBeast';
import dataJson from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {
  showDetails = (e) => {
    e.preventDefault();

  }

  render() {


    return (
      <CardColumns>
        {dataJson.map(horn => {

          return (


            <HornedBeast img={horn.image_url}
              title={horn.title}
              disc={horn.description} />






          );
        })}
      </CardColumns>

    );
  }

}

export default Main;


