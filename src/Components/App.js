import '../css/style.css'
import { educational, chores, charity, relaxation } from '../apiCals';
import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Swiper from './Swiper';
import LikeBar from './LikeBar';
import Filter from './Filter';
import Modal from './Modal';
import NotePad from './NotePad';

class App extends Component {
  constructor () {
    super()
    this.state = {
      education: '',
      busywork: '',
      relaxation: '',
      charity: '',
      isOpen: false,
      noteOpen: false,

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
        <Swiper props={this.state}
                openModal={() => this.setState({isOpen: true})}
        />
        <Modal open={this.state.isOpen} 
               onClose={() => this.setState({isOpen: false})} 
               props={this.state} 
        />
        <NotePad 
          open={this.state.noteOpen} 
          onClose={() => this.setState({noteOpen: false})} 
          props={this.state} 
        /> 
        <LikeBar  
          props={this.state} 
          openNotes={() => this.setState({noteOpen: true})}
        />
        <Filter />
        <Footer />
      </div>
    );
  }
  }
  

export default App;
