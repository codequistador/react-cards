import React, { Component } from 'react';
import './App.css';
import { IconComposeSolid } from 'instructure-icons';
import { IconMoreSolid } from 'instructure-icons';
import { IconDocumentSolid } from 'instructure-icons';
import { IconAnnouncementSolid } from 'instructure-icons';
import { IconChatSolid } from 'instructure-icons';
import { IconFolderSolid } from 'instructure-icons';
import { IconXSolid } from 'instructure-icons';
import header1 from './header1.jpg';
import header2 from './header2.jpg';
import header3 from './header3.jpg';
import header4 from './header4.jpg';
import header5 from './header5.jpg';

const Card = (props) => {
  return (
    <div className="card">
      <header className="card__header">
        <img alt="Art History 3" className="img--responsive" src={props.header} />
        <a href=""><IconComposeSolid /></a>
        <div className="card__header-overlay card__header-overlay--blue"></div>
      </header>

      <CardContent />

      <div className="card__actions">
        <a href=""><IconDocumentSolid /></a>
        <a href=""><IconAnnouncementSolid /></a>
        <a href=""><IconChatSolid /></a>
        <a href=""><IconFolderSolid /></a>
      </div>
      <footer className="card__stripe card__stripe--blue"></footer>
    </div>
  );
}

class CardContent extends Component {
  render() {
    return (
      <div>
        <div className="card__content">
          <h3>Art History 3</h3>
          <h4>ART HIS 3</h4>
          <div className="card__content-desc">
            <p>Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony. </p>
          </div>
          <IconMoreSolid />
        </div>
        <div className="card__reveal">
          <IconXSolid />
          <h3>Art History 3</h3>
          <h4>ART HIS 3</h4>
          <p>Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony. </p>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Card color="blue" header={header1} />
        <Card color="green" header={header2} />
        <Card color="purple" header={header3} />
        <Card color="red" header={header4} />
        <Card color="orange" header={header5} />
      </div>
    );
  }
}

export default App;
