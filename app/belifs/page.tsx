"use client";
import * as React from "react";
import styles from "./belifs.module.css";
import { Avatar, Card, Tabs } from "antd";
import Meta from "antd/es/card/Meta";
import Navbar from "@/components/nav/Navbar";
import { centreList } from "@/database/centre-list";
import { belifsListo } from "@/database/belifs-listo";

interface IAppProps {}

const getCardsByReligion = (religion: string) => {
  // Access the property directly using the religion parameter
  const icons =
    religion === "christianity"
      ? belifsListo.christianity
      : religion === "buddhism"
      ? belifsListo.buddhism
      : religion === "hinduism"
      ? belifsListo.hinduism
      : [];

  return (
    <div>
      <div className={styles.cardContainer}>
        {icons
          .filter((icon) => icon.mainIcon === true) // Correct filter syntax
          .map((icon) => (
            <Card
              key={icon.id} // Ensure id is unique for each card
              style={{ width: "45vw" }}
              cover={
                <img
                  alt={icon.title} // Use icon.title for the alt text
                  src={icon.imgSrc} // Use icon.imgSrc for the image source
                />
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
                className={styles.metacontent}
                title={icon.title} // Use icon.title for the title
                description={icon.description} // Use icon.description for the description
              />
            </Card>
          ))}
      </div>
      <div className={styles.cardContainer}>
        {icons
          .filter((icon) => icon.mainIcon === false) // Correct filter syntax
          .map((icon) => (
            <Card
              key={icon.id} // Ensure id is unique for each card
              style={{ width: "45vw" }}
              cover={
                <img
                  alt={icon.title} // Use icon.title for the alt text
                  src={icon.imgSrc} // Use icon.imgSrc for the image source
                />
              }
              // onClick={openDescriptionByLink(icon.url)}
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
                avatar={
                  <Avatar
                    src={icon.iconImage}
                    // src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${icon.id}`}
                  />
                }
                title={icon.title} // Use icon.title for the title
                description={icon.description} // Use icon.description for the description
              />
            </Card>
          ))}
      </div>
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
