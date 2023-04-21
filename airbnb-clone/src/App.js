import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data
        })
      })
  }
  render() {
    return (
        <div class="app">
          <div class="main">
            <div class="search">
            </div>
            <div class="flats">
              {this.state.flats.map((flat) => {
                return <Flat flat={flat} />
              })}
            </div>
          </div>
          <div class="map">
          </div>
        </div>
    );
  }
}

export default App;
