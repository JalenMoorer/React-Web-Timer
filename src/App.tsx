import React from 'react';
import moment from 'moment';
import { ThemeProvider } from 'styled-components';

// Components
import { Countdown } from './components/Countdown';

type AppProps = {
  isDefaultTheme: boolean,
}

interface StateProps {
  theme: any;
  time: string;
  resetTime: string;
  status: string;
  inputObject: inputObjectProps;
  timer: number;
}

interface inputObjectProps {
  hours: string;
  minutes: string;
  seconds: string;
}

class App extends React.Component<AppProps> {
  static defaultProps = {
    isDefaultTheme: false,
  }
  state: StateProps = {
    theme: null,
    time: "00:00:00",
    resetTime: "00:00:00",
    status: "inactive",
    inputObject: {
      hours: "0",
      minutes: "0",
      seconds: "0",
    },
    timer: 0,
  }
  
  
  async componentDidMount() {
    if (!this.props.isDefaultTheme) {
      fetch("https://api.koala.io/marketing/v1/device-configurations/alias/web-config", {
        method: 'GET',
        headers: {
          "Content-type": "application/json;charset=UTF-8",
          "X-Organization-Id": "1",
        }
      })
        .then(res => res.json())
        .then(
          async (result) => {
            if (result.error)
              this.fetchDefaultTheme()
            else
              this.setState({ theme: result.data.data });
          },
          (error) => {
            console.log(`${error}.  Fetching from defaultInstead`);
            this.fetchDefaultTheme();
          })
    }
    else 
     this.fetchDefaultTheme()
  }
  
  componentWillUnmount () {
    clearInterval(this.state.timer);
    window.removeEventListener('beforeunload', this.onUnload);
  }

  async fetchDefaultTheme() {
    const { default: defaultTheme } =  await import('./defaultTheme');;
    this.setState({ theme: defaultTheme });
  }

  onUnload = (e: any) => {
    e.preventDefault();
    // Older browsers supported custom message
    e.returnValue = 'Are you sure you want to leave?';
  }

  handleCountDown = () => {
    if (this.state.time === '00:00:00') {
      window.alert('Timer Finished!');
      window.removeEventListener('beforeunload', this.onUnload);
      this.setState({ status: 'done' })
      clearInterval(this.state.timer);
    }
    else {
      const newTime = moment(this.state.time, 'HH:mm:ss')
      .subtract(1, 'second')
      .format('HH:mm:ss');
      this.setState({ time: newTime });
    }
  }

  resetCountDown = () => {
    this.setState({ status: 'inactive', time: this.state.resetTime, resetTime: '00:00:00' });
  }

  toggleCountDown = () => {
    if (this.state.resetTime === '00:00:00') {
      this.setState({ resetTime: this.state.time });
    }
    if (this.state.status === 'active') {
      clearInterval(this.state.timer);
      this.setState({ status: 'paused' });
    }
    else {
      window.addEventListener('beforeunload', this.onUnload);
      this.setState({ status: 'active', timer: setInterval(this.handleCountDown, 1000) });
    }
  }

  handleChange = (e: any) => {
    const regex = /^[0-9]\d*$/;
    const value = e.target.value === '' ? '0' : e.target.value;
    if (!regex.test(value)) {
      e.preventDefault();
      return false;
    }
    const unit = e.target.getAttribute('data-unit');
    if ( (unit !== 'hours' && value > 59 ) || (unit === 'hours' && value > 23) ) {
      e.preventDefault();
      return false;
    }
    else {
      const timeObj = {...this.state.inputObject, [unit]: Number.parseInt(value).toFixed(0) };
      const { hours, minutes, seconds } = timeObj;
      const time = moment(`${hours}:${minutes}:${seconds}`, 'HH:mm:ss').format('HH:mm:ss');
      this.setState({ 
        time: time,
        inputObject: {...timeObj } })  
    }
  }

  render() {
    return (
      !this.state.theme ? <h2>Loading...</h2>
      : (
        <ThemeProvider theme={this.state.theme || this.props.isDefaultTheme }>
          <Countdown
            time={this.state.time}
            inputObject={this.state.inputObject} 
            onChange={this.handleChange}
            startCountdown={this.toggleCountDown}
            triggerReset={this.resetCountDown}
            status={this.state.status}
          />
        </ThemeProvider>
      )
    )
  }
}

export default App;
