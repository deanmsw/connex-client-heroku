import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
 
function Header() {
  const [heading, setHeading] = useState('');
  
  useEffect(() => {
  const loadHeading = async () => {
    try {
      const url = "https://connex-server-heroku.herokuapp.com/api";
      const res = await fetch(url);
      const data = res.json();
      return data;  
    } catch (err) {
      console.log(err);
    }
  }
    loadHeading().then((data) => setHeading(data))
  }, []);
  
  return (
    <>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerWrapper}>{heading.title}</h1>
      </div>
    </>
  );
};

export default Header;