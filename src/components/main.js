import React from 'react';
import HornedBeast from './hornedBeast';
import dataJson from './data.json';

class Main extends React.Component {


  render() {

    let newArr = [];
    dataJson.forEach(horn => {
      newArr.push(
        <div>
          <HornedBeast img={horn.image_url}
            title={horn.title}
            disc={horn.description} />


        </div>
      );
    });
    return newArr;

  }

}

export default Main;


