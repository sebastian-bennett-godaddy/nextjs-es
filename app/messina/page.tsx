'use client'
import * as React from 'react';
import styles from './messina.module.css'
import Navbar from '@/components/nav/Navbar';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return <>
        <div className={styles.home}>
         <Navbar/>
          <div className={styles.header}><h3>Your Messina</h3></div>
            <div className={styles.body}>
            <img src={"/images/sample/messages.jpg"}/>
            </div>
        </div>
        </>;
};

export default App;
