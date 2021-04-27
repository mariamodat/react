import React from 'react';
import HornedBeast from './hornedBeast';
import dataJson from './data.json';
import CardDeck from 'react-bootstrap/Card';


class Main extends React.Component {


  render() {


    return dataJson.map(horn => {
      return (
        <div>
          <CardDeck>
            <HornedBeast img={horn.image_url}
              title={horn.title}
              disc={horn.description} />

          </CardDeck>


        </div>
      );
    });

  }

}

export default Main;


