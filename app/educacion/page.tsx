"use client";

import * as React from "react";
import styles from "./educacion.module.css";
import Navbar from "@/components/nav/Navbar";
import { educacionData } from "@/database/educacionData";
import { Avatar, Card, Tabs } from "antd";
import Meta from "antd/es/card/Meta";
import { getReligionById } from "../attivida/page";

interface IAppProps {}

const getMaterialByReligion = (religion: string) => {
  const eduByRel =
    religion === "christianity"
      ? educacionData.christianity
      : religion === "buddhism"
      ? educacionData.buddhism
      : religion === "hinduism"
      ? educacionData.hinduism
      : {};

  return Object.entries(eduByRel).map(([classification, items]: any) => (
    <div key={classification} className={styles.classificationContainer}>
      <h2 style={{ fontSize: 16 }}>
        {classification.charAt(0).toUpperCase() + classification.slice(1)}
      </h2>
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          {items.slice(0, 6).map((edu: any, index: number) => (
            <Card
              key={index} // Ensure index is unique for each card
              className={styles.cardItem}
              // cover={
              //   <img
              //     alt={edu.title} // Use edu.title for the alt text
              //     src={edu.imgSrc} // Use edu.imgSrc for the image source
              //   />
              // }
            >
              <Meta
                avatar={
                  <div className={styles.imgTile}>
                    <img style={{ borderRadius: 5 }} src={edu.imgSrc} />
                  </div>
                }
                title={<div className={styles.metaTitle}>{edu.title}</div>}
                description={
                  <div className={styles.metaDescription}>
                    {edu.description}
                  </div>
                }
              />
            </Card>
          ))}
          {items.slice(0, 6).map((edu: any, index: number) => (
            <Card
              key={index} // Ensure index is unique for each card
              className={styles.cardItem}
              // cover={
              //   <img
              //     alt={edu.title} // Use edu.title for the alt text
              //     src={edu.imgSrc} // Use edu.imgSrc for the image source
              //   />
              // }
            >
              <Meta
                avatar={
                  <div className={styles.imgTile}>
                    <img style={{ borderRadius: 5 }} src={edu.imgSrc} />
                  </div>
                }
                title={<div className={styles.metaTitle}>{edu.title}</div>}
                description={
                  <div className={styles.metaDescription}>
                    {edu.description}
                  </div>
                }
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  ));
};

const App: React.FunctionComponent<IAppProps> = () => {
  const [selectedReligion, setSelectedReligion] =
    React.useState<string>("christianity");

  return (
    <>
      <div className={styles.home}>
        <Navbar />
        <div className={styles.header}>
          <h3>Welcome to De La Élitacietè</h3>
        </div>
        <div className={styles.body}>
          <Tabs
            defaultActiveKey="1"
            size={"small"}
            className={styles.religionTabs}
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1); // 1, 2, 3
              const religion = getReligionById(id); // christianity, buddhism, hinduism
              const capitalizedReligion =
                religion.charAt(0).toUpperCase() +
                religion.slice(1).toLowerCase();

              return {
                label: capitalizedReligion,
                key: id,
                children: getMaterialByReligion(religion),
              };
            })}
          />
        </div>
      </div>
    </>
  );
};

export default App;
