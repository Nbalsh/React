import React, { Component } from 'react';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 21, 2017',
            newDeadline: '',
            time: 25,
            newTime: 0
        };        
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline});
    }

    changeTime() {
        this.setState({time: this.state.newTime});
    }

    render() {
        return (
            <div className="App">
                <div className="App-title"> Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl
                        className='Deadline-input'
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value})}
                    />
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
                <div>Countdown from {this.state.time}</div>
                <Stopwatch time={this.state.time}/>
                <Form inline>
                    <FormControl
                        className='Stopwatch-input'
                        placeholder='new time'
                        onChange={event => this.setState({newTime: event.target.value})}
                    />
                    <Button onClick={() => this.changeTime()}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default App;