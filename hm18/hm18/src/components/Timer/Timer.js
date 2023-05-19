import React from 'react';

import './Timer.css';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
            startTime: new Date().getTime(),
            endTime: new Date().getTime() + props.time,
            nowTime: new Date().getTime(),
            currentTime: this.props.time,
            isCounting: false,
            isTick: this.props.autostart,
            lineWidth: '100%',
            steps: props.steps * 1000,
        }
    }

    componentDidMount() {
        this.tick()
    }

    count(number) {
        return number - this.state.steps / 1000;
    }

    mins() {
        return Math.floor(this.state.currentTime / 60).toString().padStart(2, '0');
    }

    secs() {
        return (this.state.currentTime - this.mins() * 60).toString().padStart(2, '0');
    }

    timerStart() {
        this.setState({
            isTick: true,
        });
    }

    timerStop() {
        this.setState({
            isTick: false,
        });
    }

    timerReset() {
        this.setState({
            isTick: false,
            currentTime: this.state.time,
            lineWidth: "100%",
        });
    }

    tick() {

        this.timer = setInterval(() => {
            if (this.state.isTick) {
                if (this.state.currentTime >= 1) {

                    this.setState({
                        currentTime: this.count(this.state.currentTime),
                        lineWidth: Math.ceil((this.state.currentTime * 100) / this.state.time) + "%"
                    });

                    if (this.state.currentTime === 1) {
                        this.setState({
                            lineWidth: "0%"
                        });
                    }
                } else {
                    this.setState(
                        {
                            lineWidth: "100%",
                            startTime: new Date().getTime(),
                            endTime: new Date().getTime() + this.props.time,
                            currentTime: this.props.time,
                        }
                    )
                }
            }
            console.log(this.state.steps)
        }, this.state.steps);
    }

    render() {
        return (
            <div className='timer-wrapper'>
                <div className='timer'>
                    <span>{this.mins()}</span>
                    <span>:</span>
                    <span>{this.secs()}</span>
                </div>

                <div className='line-wrapper'>
                    <div className='line' style={{ width: this.state.lineWidth }} value={this.state.steps / 1000}></div>
                </div>
                <div className='timer-buttons'>
                    {
                        this.state.isTick ?
                            (<button onClick={() => this.timerStop()}>Stop</button>) :
                            (<button onClick={() => this.timerStart()}>Start</button>)
                    }
                    <button onClick={() => this.timerReset()}>Reset</button>
                </div>
            </div >
        )
    }
} 