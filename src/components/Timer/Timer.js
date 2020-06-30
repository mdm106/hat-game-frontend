import React, { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';

const Timer = ({ timerTotal, starter }) => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    let toggle = () => {
        if(seconds===0) {
            starter();
        }
        setIsActive(!isActive);
    }

    let reset = () => {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if(isActive && seconds < timerTotal) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (isActive && seconds===timerTotal ) {
            setIsActive(false);
            clearInterval(interval);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    let setTimeShown = (seconds) => {
        let timeShown = "0:00";
        if(seconds < 10) {
            timeShown = `0:0${seconds}`;
        } else if (seconds < 59) {
            timeShown = `0:${seconds}`
        } else {
            timeShown = `01:00`;
        }
        return timeShown;
    }    

    return (
        <div className="container">
          <div>
            {setTimeShown(seconds)}
          </div>
          <div>
            {seconds===timerTotal ?  
            <p>Time's Up</p> : 
            <Button variant="success" onClick={toggle}>
              {isActive ? 'Pause' : 'Start'}
            </Button>
            }{' '}
            <Button variant="info" onClick={reset}>
              Reset
            </Button>
          </div>
        </div>
      );
}

export default Timer;
