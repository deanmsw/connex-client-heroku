import { useEffect, useState } from 'react';
import styles from './Metrics.module.scss';

function Metrics() {
  const [metrics, setMetrics] = useState();

useEffect(() => {
  const loadMetrics = async () => {
    try {
      const url = "https://connex-server-heroku.herokuapp.com/metrics";
      const res = await fetch(url);
      const data = res.text();
      return data;  
    } catch (err) {
      console.log(err)
    }
  }
    loadMetrics().then((data) => setMetrics(data))
  }, []);


console.log(metrics)

  return (
    <>
      <div className={styles.metricsWrapper}>
        <h1>Metrics</h1>
        <p>{metrics}</p>
      </div>
    </>
  )
}

export default Metrics;