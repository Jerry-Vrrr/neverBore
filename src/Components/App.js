import './App.css';
import { rawData } from '../apiCals';
import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Swiper from './Swiper';

class App extends Component {
  constructor () {
    super()
    this.state = {
      info: ''
    }
  }
  
fetchAll = () => {
return rawData.then(data => {
  this.setState({info: data})
})
}

componentDidMount() {
  this.fetchAll()
}

  render() {
    return (
      <div className="App">
        <Header />
        <Swiper activity={this.state.info.activity}/>
        <Footer />
      </div>
    );
  }
  }
  

export default App;
