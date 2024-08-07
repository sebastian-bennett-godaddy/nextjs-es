'use client';
import * as React from 'react';
import styles from './centra.module.css';
import { Avatar, Card, Tabs } from 'antd';
import Meta from 'antd/es/card/Meta';
import Navbar from '@/components/nav/Navbar';
import { centreList } from '@/database/centre-list';

interface IAppProps {}

const getCardsByReligion = (religion: string) => {
  // Access the property directly using the religion parameter
  const centres = religion === 'christianity' ? centreList.christianity
                : religion === 'buddhism' ? centreList.buddhism
                : religion === 'hinduism' ? centreList.hinduism
                : [];
  ;

  return (
    <div className={styles.cardContainer}>
      {centres?.map((centre: any) => (
        <Card
          key={centre.id} // Ensure id is unique for each card
          style={{ width: '45vw' }}
          cover={
            <img
              alt={centre.title} // Use centre.title for the alt text
              src={centre.imgSrc} // Use centre.imgSrc for the image source
            />
          }
          actions={[
            // Uncomment and use these actions if needed
            // <SettingOutlined key="setting" />,
            // <EditOutlined key="edit" />,
            // <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title={centre.title} // Use centre.title for the title
            description={centre.description} // Use centre.description for the description
          />
        </Card>
      ))}
    </div>
  );
};

// Function to determine religion based on id
const getReligionById = (id: string) => {
  switch (id) {
    case '1':
      return 'christianity';
    case '2':
      return 'buddhism';
    case '3':
      return 'hinduism';
    default:
      return 'christianity'; // Default fallback
  }
};

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <div className={styles.home}>
        <Navbar />
        <Tabs
          defaultActiveKey="1"
          size={'small'}
          className={styles.religionTabs}
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1); // 1, 2, 3
            const religion = getReligionById(id); // christianity, buddhism, hinduism
            const capitalizedReligion = religion.charAt(0).toUpperCase() + religion.slice(1).toLowerCase();

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
