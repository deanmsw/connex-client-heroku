import { useEffect, useState } from 'react';
import styles from './Time.module.scss';

function Time () {
  const [time, setTime] = useState([0, 0]);

useEffect(() => {
  const interval = setInterval(() => {
     fetch("https://connex-server-heroku.herokuapp.com/time")
      .then((res) => res.json())
      .then((data) => setTime(data));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

// Gets Client Time
const date = Date.now();

// Difference between Server Time and Client Time in seconds
const seconds = (date - time[1]);

// get hh:mm:ss string
const timeOffset = new Date(seconds * 1000).toISOString().slice(11, 19);

  return (
    <>
      <div className={styles.wrapper}>
        <h1>Time</h1>

        <h2>Server Time</h2>
        <h3>{time[0]}</h3>

        <h2>Difference in Time</h2>
        <h3>{timeOffset}</h3>
      </div>
    
    </>
  )
}

export default Time