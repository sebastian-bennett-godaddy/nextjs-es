'use client'
import * as React from 'react';
import styles from './connecttiti.module.css'
import Navbar from '@/components/nav/Navbar';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return <>
        <div className={styles.home}>
          <Navbar/>
          <div className={styles.header}><h3>Your Connección</h3></div>
          <div className={styles.body}>
          <img src={"/images/sample/SimpleMind.png"}/>
          </div>
        </div></>;
};

export default App;
