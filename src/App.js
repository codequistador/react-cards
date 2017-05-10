import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
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
  state = { courses: [] };

  componentDidMount() {
    var _this = this;
    this.serverRequest = 
      axios.get('http://canvas-api.herokuapp.com/api/v1/courses?access_token=9be624b4d5206a178fc56921d5bf2c2a')
        .then(function(response) {
          _this.setState({
            courses: response.data
          });
        });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        <div className="container">
          <header className="container__desc">
            <h2>Static-ish Cards</h2>
            <p>These cards are generated in the App component with variables that pass hard-coded values to the card component.</p>
          </header>

          <Card color="blue"
                header={header1}
                title="Grail Seeking 3"
                subTitle="GS 3"
                desc="Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony."
          />
          <Card color="green"
                header={header2}
                title="Witches 101"
                subTitle="WW 101"
                desc="Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony."
          />
          <Card color="purple"
                header={header3}
                title="Shrubbaries 201"
                subTitle="SHRUB 201"
                desc="Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony."
          />
          <Card color="red"
                header={header4}
                title="Rabbits 301"
                subTitle="BEASTS 301"
                desc="Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony."
          />
          <Card color="orange"
                header={header5}
                title="Study Hall"
                subTitle="STUDY HALL"
                desc="Oh, king eh? Very nice. And how'd you get that, eh? By exploiting the workers. By hanging on to outdated imperialist dogma which perpetuates the economic and social differences in our society. Listen, strange women lyin' in ponds distributin' swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony. Oh, what a giveaway! Did you hear that? Did you hear that, eh? That's what I'm on about! Did you see him repressing me? You saw him, didn't you? Now you see the violence inherent in the system! Come and see the violence inherent in the system! Help! Help! I'm being repressed!"
          />
        </div>
        <div className="container">
          <header className="container__desc">
            <h2>Cards from the API</h2>
            <p>These cards are generated via an API call to Instructure's courses API via the awesome axios npm package.</p>
          </header>

          {this.state.courses.map(function(course) {
            return (
              <Card color="blue"
                    header={header1}
                    title={course.name}
                    subTitle={course.code}
                    desc={course.description}
              />
            );
          })}

        </div>
      </div>
    );
  }
}

export default App;
