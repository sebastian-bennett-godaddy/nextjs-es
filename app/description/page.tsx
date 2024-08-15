"use client";

import * as React from "react";
import styles from "./description.module.css";
import Navbar from "@/components/nav/Navbar";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <div className={styles.home}>
        <Navbar />
        <div className={styles.header}>
          <h3>Welcome to De La Élitacietè</h3>
        </div>
        <div className={styles.body}>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
          <h3>Tutta De La Ragrazza En La Familia Soy Muy Perfectosique</h3>
        </div>
      </div>
    </>
  );
};

export default App;
