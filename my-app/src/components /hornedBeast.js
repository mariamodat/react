import react from 'react';
class HornedBeast extends React.Component {
    render (){

        return (
            <div>
                <h2>{this.props.name}</h2>
              
                <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="1"/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
export default HornedBeast ;