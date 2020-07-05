import React, { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    let toggle = () => {
        setIsActive(!isActive);
    }

    let reset = () => {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if(isActive && seconds < 45) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (isActive && seconds=== 45 ) {
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
        <div className="container text-center mt-4" style={{fontSize: "3rem"}}>
            <h3>Timer</h3>
          <div>
            {setTimeShown(seconds)}
          </div>
          <div>
            {seconds=== 45?  
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
