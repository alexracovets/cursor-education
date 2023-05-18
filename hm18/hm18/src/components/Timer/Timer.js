import React from 'react';
import { useState, useEffect } from 'react';

import './Timer.css';

// function Timer(props) {
//     const time = props.time;

//     const [currentTime, setTimeLeft] = useState(time);
//     const [isCounting, setIsCounting] = useState(false);

//     const minutes = Math.floor(currentTime / 60).toString().padStart(2, '0');
//     const seconds = (currentTime - minutes * 60).toString().padStart(2, '0');

//     const timerStart = function () {
//         setIsCounting(true);
//     }
//     const timerStop = function () {
//         setIsCounting(false);
//     }
//     const timerReset = function () {
//         setIsCounting(false);
//         setTimeLeft(time);
//     }

//     useEffect(() => {
//         const interval = setInterval(() => {
//             isCounting &&
//                 setTimeLeft((currentTime) => (currentTime >= 1 ? currentTime - 1 : 0))
//         }, 1000);

//         if (currentTime === '0') {
//             setIsCounting(false);
//         };

//         return () => {
//             clearInterval(interval);
//         };
//     }, [currentTime, isCounting]);


//     return (
//         <div className='timer-wrapper'>
//             <div className='timer'>
//                 <span>{minutes}</span>
//                 <span>:</span>
//                 <span>{seconds}</span>
//             </div>
//             <div className='timer-buttons'>
//                 {isCounting ? (
//                     <button onClick={timerStop}>Stop</button>
//                 ) :
//                     (
//                         <button onClick={timerStart}>Start</button>
//                     )
//                 }
//                 <button onClick={timerReset}>Reset</button>
//             </div>
//         </div>
//     )
// }

// export default Timer;

class Timer extends Component {
    state = {
        time: 1000 * 1000 // ms, = 1000s
    }
    onTimeEnd = () => this.setState({ time: 1000 * 1000 })
    onTimeChange = (time) => this.setState({ time })
    render() {
        return <Timer time={this.state.time} onTimeChange=
            {this.onTimeChange} onTimeEnd={this.onTimeEnd} step={10000}
            autostart
        />
    }
}

export default Timer