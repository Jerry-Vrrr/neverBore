import "../css/style.css";
import { educational, chores, charity, relaxation } from "../apiCals";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Swiper from "./Swiper";
import LikeBar from "./LikeBar";
import Filter from "./Filter";
import Modal from "./Modal";
import NotePad from "./NotePad";

class App extends Component {
  constructor() {
    super();
    this.state = {
      education: "",
      busywork: "",
      relaxation: "",
      charity: "",
      isOpen: false,
      noteOpen: false,
      notes: [],
      currentCategory: ''
    };
  }

  fetchAll = (type) => {
    return type.then((data) => {
      this.setState({ [data.type]: data.activity });
    });
  };

  componentDidMount() {
    this.fetchAll(educational);
    this.fetchAll(chores);
    this.fetchAll(relaxation);
    this.fetchAll(charity);
  }

  addNote = (event) => {
    this.setState({
      notes: [...this.state.notes, event.target.value],
    });
  };

  doThings=(event) => {
    this.setState({ isOpen: true, currentCategory: event.target.id })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Header />
              <Swiper
                props={this.state}
                openModal={(event) => this.doThings(event)}
              />

              <Modal
                open={this.state.isOpen}
                onClose={() => this.setState({ isOpen: false })}
                props={this.state}
                addToList={this.addNote}
                openNotes={() => this.setState({ noteOpen: true })}
              />

              <NotePad
                open={this.state.noteOpen}
                onClose={() => this.setState({ noteOpen: false })}
                notes={this.state.notes}
                props={this.state}
              />
              <LikeBar
                props={this.state}
                openNotes={() => this.setState({ noteOpen: true })}
              />
              <Filter />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
