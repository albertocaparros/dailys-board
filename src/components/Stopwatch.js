import { useState, useEffect } from 'react';
import {
  BsFillSkipStartCircleFill,
  BsFillPauseCircleFill,
  BsFillPlayCircleFill,
} from 'react-icons/bs';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <>
      <div className='buttons'></div>

      <div>
        <div className='numbers'>
          <h1>
            {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
            {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
            {('0' + ((time / 10) % 100)).slice(-2)}
          </h1>
          <div className='timeline'>
            {!running && (
              <h1 className='icon'>
                <BsFillPlayCircleFill
                  onClick={() => setRunning(true)}></BsFillPlayCircleFill>
              </h1>
            )}
            {running && (
              <h1 className='icon'>
                <BsFillPauseCircleFill
                  onClick={() => setRunning(false)}></BsFillPauseCircleFill>
              </h1>
            )}
            <h1 className='icon'>
              <BsFillSkipStartCircleFill
                onClick={() => setTime(0)}></BsFillSkipStartCircleFill>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
