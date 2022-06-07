import Header from './components/Header/Header';
import Metrics from './components/Metrics/Metrics';
import Time from './components/Time/Time';
import styles from './App.module.scss'

function App() {

  return (
    <div className={styles.App}>
      <div className={styles.appWrapper}>
          <Header />
        <div className={styles.appBody}>
          <Time />
          <Metrics />
        </div>
      </div>
    </div>
  );
}

export default App;
