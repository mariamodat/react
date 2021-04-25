
import Main from './main';
import Header from './header';
import Footer from '../src/footer';

import React from 'react';
class App extends React.Component {
  render() {
    return (
    <div>
    <Header/>
    <Main/>
    <Footer/>
    </div>
    )
  }
}

export default App;