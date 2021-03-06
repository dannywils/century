import React, { Component, PropTypes } from 'react';
import CenturyClub from './CenturyClub';

class App extends Component {
  static defaultProps = {
    secondsUntilDrink: 60,
    drinksUntilFinished: 100,
    flashDuration: 7,
    secondsBeforeFlash: 2
  };

  static propTypes = {
    secondsUntilDrink: PropTypes.number.isRequired,
    drinksUntilFinished: PropTypes.number.isRequired,
    flashDuration: PropTypes.number.isRequired,
    secondsBeforeFlash: PropTypes.number.isRequired
  };

  state = {
    state: 'idle',
    seconds: 0,
    drinks: 0
  };

  componentDidMount() {
    this.minuteSound = new Audio('shots.mp3');
    this.finalSound = new Audio('final.mp3');
  }

  tick = () => {
    const {
      drinksUntilFinished,
      secondsUntilDrink,
      secondsBeforeFlash
    } = this.props;

    const {
      drinks,
      seconds
    } = this.state;

    if (drinks === drinksUntilFinished) {
      clearInterval(this.interval);

      this.setState({
        state: 'YOU DID IT!',
        seconds: 'YOU ROCK!'
      });

      this.finalSound.play();

      return;
    }

    // start the sound a bit earlier
    if (seconds === secondsUntilDrink - secondsBeforeFlash) {
      this.minuteSound.play();
    }

    if (seconds === secondsUntilDrink) {
      this.setState({
        drinks: drinks + 1,
        seconds: 0
      });

      return;
    }

    this.setState({
      seconds: seconds + 1
    });
  };

  start = () => {
    this.minuteSound.play();

    this.setState({
      state: 'started',
      drinks: 1
    });
    this.interval = setInterval(this.tick, 1000);
  };

  render() {
    const {
      secondsUntilDrink,
      flashDuration
    } = this.props;

    const {
      seconds,
      drinks
    } = this.state;

    const isDone = drinks > 0 && seconds >= 0 && seconds < flashDuration;

    const shouldFlash = isNaN(seconds) ||
      seconds >= secondsUntilDrink - 1 ||
      isDone;

    return (
      <CenturyClub
        drinks={drinks}
        seconds={seconds}
        shouldFlash={shouldFlash}
        percent={seconds / secondsUntilDrink}
        onStart={this.start}
      />
    );
  }
}

export default App;
