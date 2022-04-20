import './App.css';
import { rawData } from '../apiCals';
import React, {Component} from 'react';

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
        <header className="App-header">
          <p>{this.state.info.activity}</p>
        </header>
      </div>
    );
  }
  }
  

export default App;
