import React, { Component } from 'react';
import './App.css';
import { IconComposeSolid } from 'instructure-icons';

const Card = (props) => {
  return (
    <div className="card">
      <header className="card__header">
        <img src="" />
        <IconComposeSolid />
        <div class="card__header-overlay--blue"></div>
      </header>
      <div className="card__content">
        <h3>Course Title</h3>
        <h4>SUB-TITLE</h4>
        <div className="card__content-desc">
          <p>Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony. </p>
        </div>
      </div>
      <footer className="card__footer">
        <div className="card__footer-actions">

        </div>
        <div className="card__footer-stripe--blue"></div>
      </footer>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Card />
      </div>
    );
  }
}

export default App;
