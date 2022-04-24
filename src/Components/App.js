import "../css/style.css";
import { educational, chores, charity, relaxation } from "../apiCals";
import React, { Component} from "react";
import {  Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Swiper from "./Swiper";
import LikeBar from "./LikeBar";
import Filter from "./Filter";
import Modal from "./Modal";
import NotePad from "./NotePad";
import About from "./About";

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
      currentCategory: "",
    };
  }

  fetchAll = (type) => {
    return type.then((data) => {
      this.setState({ [data.type]: [data.activity, data.key] });
    });
  };

  componentDidMount() {
    this.fetchAll(educational);
    this.fetchAll(chores);
    this.fetchAll(relaxation);
    this.fetchAll(charity);
  }

  addNote = (event) => {
    const note = { note: event.target.value, id: event.target.id };
    
    this.setState({ notes: [...this.state.notes, note] })
  };

  doThings = (event) => {
    this.setState({ isOpen: true, currentCategory: event.target.id });
  };

  deleteNote = (event) => {
    event.preventDefault();
    const filteredNotes = this.state.notes.filter(note => note.id !== event.target.id);

    this.setState({ notes: filteredNotes });
  };

  render() {
    return (
      <div className="App">
            <Header />
            <Route exact path="/">
              
              <Swiper
                props={this.state}
                openModal={(event) => this.doThings(event)}
                openNotes={() => this.setState({ noteOpen: true })}
                addToList={this.addNote}
                currentCategory={this.state.currentCategory}
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
                handleNote={this.handleNote}
                deleteNote={this.deleteNote}
              />

              <LikeBar
                props={this.state}
                openNotes={() => this.setState({ noteOpen: true })}
              />
              <Filter />
              <Footer />
            </Route>

            <Route exact path="/about">
                <About />
            </Route >
            
      </div>
    );
  }
}

export default App;
