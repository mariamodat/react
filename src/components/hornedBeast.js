import React from 'react';
class HornedBeast extends React.Component {
  render() {

    return (
      <div>
        <img src={this.props.img} alt="the img"/>
        <h2> {this.props.title}</h2>
        <p> {this.props.disc}</p>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
}
export default HornedBeast;
