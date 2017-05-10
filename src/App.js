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
        <div className={`card__header-overlay card__header-overlay--${props.color}`}></div>
      </header>

      <CardContent {...props} />

      <div className="card__actions">
        <a href=""><IconDocumentSolid /></a>
        <a href=""><IconAnnouncementSolid /></a>
        <a href=""><IconChatSolid /></a>
        <a href=""><IconFolderSolid /></a>
      </div>
      <footer className={`card__stripe card__stripe--${props.color}`}></footer>
    </div>
  );
}

class CardContent extends Component {
  state = { isRevealed: '' };

  revealFullDesc() {
    var revealed = (this.state.isRevealed === "") ? "isVisible" : "";
    this.setState({"isRevealed":revealed});
  }

  render() {
    return (
      <div>
        <div className="card__content">
          <h3>{this.props.title}</h3>
          <h4>{this.props.subTitle}</h4>
          <div className="card__content-desc">
            <p>{this.props.desc}</p>
          </div>
          <IconMoreSolid onClick={this.revealFullDesc.bind(this)} />
        </div>
        <div className={`card__reveal ${this.state.isRevealed}`}>
          <IconXSolid  onClick={this.revealFullDesc.bind(this)} />
          <h3>{this.props.title}</h3>
          <h4>{this.props.subTitle}</h4>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Card color="blue" header={header1} title="Art History 3" subTitle="ART HIS 3" desc="Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony." />
        <Card color="green" header={header2} title="Gym" subTitle="PE 101" desc="Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony." />
        <Card color="purple" header={header3} title="Psychology 400" subTitle="PS 400" desc="Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony." />
        <Card color="red" header={header4} title="Programming 301" subTitle="PROG 301" desc="Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony." />
        <Card color="orange" header={header5} title="Study Hall" subTitle="STUDY" desc="Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony." />
      </div>
    );
  }
}

export default App;
