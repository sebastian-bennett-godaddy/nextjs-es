"use client";
import * as React from "react";
import styles from "./centra.module.css";
import { Alert, Avatar, Card, Tabs } from "antd";
import Meta from "antd/es/card/Meta";
import Navbar from "@/components/nav/Navbar";
import { centreList } from "@/database/centre-list";
import { createRipple } from "@/functions/effects/rippl";

import "/styles/effects/rippl.css";
import "/styles/interact/interact.css";

interface IAppProps {}

const getCardsByReligion = (religion: string) => {
  // Access the property directly using the religion parameter
  const centres =
    religion === "christianity"
      ? centreList.christianity
      : religion === "buddhism"
      ? centreList.buddhism
      : religion === "hinduism"
      ? centreList.hinduism
      : [];
  return (
    <div className={styles.cardContainer}>
      {centres?.map((centre: any) => (
        <a href={centre.link} className={styles.cardLink}>
          <Card
            key={centre.id}
            className={`${styles.cardItem} ripple-card`}
            onClick={(e) => {
              createRipple(e);
            }}
            cover={
              <img alt={centre.title} src={centre.imgSrc} draggable="false" />
            }
            actions={
              [
                // Uncomment and use these actions if needed
                // <SettingOutlined key="setting" />,
                // <EditOutlined key="edit" />,
                // <EllipsisOutlined key="ellipsis" />,
              ]
            }
          >
            <Meta
              className="unselectable"
              avatar={
                <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
              }
              title={centre.title}
              description={centre.description}
            />
          </Card>
        </a>
      ))}
    </div>
  );
};

// Function to determine religion based on id
const getReligionById = (id: string) => {
  switch (id) {
    case "1":
      return "christianity";
    case "2":
      return "buddhism";
    case "3":
      return "hinduism";
    default:
      return "christianity"; // Default fallback
  }
};

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <div className={styles.home}>
        <Navbar />
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
              children: getCardsByReligion(religion),
            };
          })}
        />
      </div>
    </>
  );
};

export default App;
