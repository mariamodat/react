import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      { count: 0, };
  }
  increaseCount = () => {
    this.setState(
      {
        count: this.state.count + 1
      }

    );
  }



  render() {


    return (

      <div>

        <Card  border="primary" style={{ width: '18rem' }}>
          <Card.Header  className='name'> {this.props.title}</Card.Header>
          <Card.Body>
            <Card.Title onClick={this.increaseCount}> {this.props.title}</Card.Title>
            {/* <Card.Img>onClick= {this.increaseCount} src={this.props.img} alt="the img"</Card.Img> */}
            <Card.Img src={this.props.img} onClick={this.props.clickFunc} alt={this.props.title} name={this.props.disc} />
            <Card.Text className='disc'>
              {this.props.disc}
            </Card.Text>
            <Button onClick={this.increaseCount} variant="primary">Hit like</Button>
            <Card.Text>
              💖 {this.state.count}
            </Card.Text>
          </Card.Body>
        </Card>


      </div>
    );
  }
}
export default HornedBeast;

