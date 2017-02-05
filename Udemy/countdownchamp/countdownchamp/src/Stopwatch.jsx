import React, { Component } from 'react';
import './App.css';

class Stopwatch extends Component {
    constructor (props) {
        super(props);
        this.state = {
            timeLeft: 0
        };
    }

    componentWillMount() {
         this.setState({timeLeft: this.props.time});
    }

    componentDidMount() {
        setInterval(() => this.getTimeLeft(this.props.time), 1000);
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.time !== this.state.timeLeft) {
            this.setState({ timeLeft: nextProps.time });
        }
    }

    getTimeLeft(timeLeft) {
        this.setState({timeLeft: this.state.timeLeft - 1});
    }



    render () {
        return (
            <div>
                Countdown: {this.state.timeLeft}
            </div>
        )
    }
}

export default Stopwatch;
