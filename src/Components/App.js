import '../css/style.css'
import { educational, chores, charity, relaxation } from '../apiCals';
import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Swiper from './Swiper';
import LikeBar from './LikeBar';
import Filter from './Filter';

class App extends Component {
  constructor () {
    super()
    this.state = {
      education: '',
      busywork: '',
      relaxation: '',
      charity: ''

    }
  }
  
fetchAll = (type) => {
return type.then(data => {
  this.setState({[data.type]: data.activity})
})
}

componentDidMount() {
  this.fetchAll(educational)
  this.fetchAll(chores)
  this.fetchAll(relaxation)
  this.fetchAll(charity)
}

  render() {
    return (
      <div className="App">
        <Header />
        <Swiper props={this.state}/>
        <LikeBar />
        <Filter />
        <Footer />
      </div>
    );
  }
  }
  

export default App;
