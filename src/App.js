import React, { Component } from 'react';
import './App.css';
import { IconComposeSolid } from 'instructure-icons';
import header1 from './header1.jpg';

const Card = (props) => {
  return (
    <div className="card">
      <header className="card__header">
        <img className="img--responsive" src={header1} />
        <IconComposeSolid width="2em" height="2em" />
        <div className="card__header-overlay card__header-overlay--blue"></div>
      </header>
      <div className="card__content">
        <h3>Art History 3</h3>
        <h4>ART HIS 3</h4>
        <div className="card__content-desc">
          <p>Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony. </p>
        </div>
      </div>
      <footer className="card__footer">
        <div className="card__footer-actions">

        </div>
        <div className="card__footer-stripe card__footer-stripe--blue"></div>
      </footer>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default App;
