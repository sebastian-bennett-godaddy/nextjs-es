'use client'
import * as React from 'react';
import styles from './partenza.module.css'
import Navbar from '@/components/nav/Navbar';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return <><div className={styles.home}>
          <Navbar/>
          <div className={styles.header}><h3>Partenza</h3></div>
          <div className={styles.body}>
            <div className={styles.brandContainer}>
              <div className={styles.brandRow}>
                <img src={"/images/brands/christianity/christian-1.jpeg"}/>
                <img src={"/images/brands/christianity/christian-2.png"}/>
                <img src={"/images/brands/christianity/christian-3.jpeg"}/>
                <img src={"/images/brands/christianity/christian-4.jpeg"}/>
              </div>
              <div className={styles.brandRow}>
                <img src={"/images/brands/buddhism/buddhism-1.png"}/>
                <img src={"/images/brands/buddhism/buddhism-2.jpeg"}/>
                <img src={"/images/brands/buddhism/buddhism-3.png"}/>
                <img src={"/images/brands/buddhism/buddhism-4.png"}/>
              </div>
              <div className={styles.brandRow}>
                <img src={"/images/brands/hinduism/hindu-1.png"}/>
                <img src={"/images/brands/hinduism/hindu-2.png"}/>
                <img src={"/images/brands/hinduism/hindu-3.jpeg"}/>
                <img src={"/images/brands/hinduism/hindu-4.jpeg"}/>
              </div>
            </div>
          </div>
        </div></>;
};

export default App;
