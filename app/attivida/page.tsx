'use client'
import * as React from 'react';
import styles from './attivida.module.css'
import { Avatar, Card, Row, Tabs } from 'antd';
import Meta from 'antd/es/card/Meta';
import Navbar from '@/components/nav/Navbar';
import { centreList } from '@/database/centre-list';
import { attividaListo } from '@/database/attivida-listo';

interface IAppProps {
}


const getCardsByReligion = (religion: string) => {
  const defaultReligion = 'christianity';
  const selectedReligion = religion === 'christianity' ? attividaListo.christianity
                : religion === 'buddhism' ? attividaListo.buddhism
                : religion === 'hinduism' ? attividaListo.hinduism
                : [];
  ;

  return (
      <div className={styles.cardContainer}>
        {selectedReligion?.map((attivida : any) => (
          <Card
            key={attivida.id} // Ensure id is unique for each card
            style={{ width: '45vw' }}
            cover={
              <img
                alt={attivida.title} // Use attivida.title for the alt text
                src={attivida.imgSrc} // Use attivida.imgSrc for the image source
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
              title={attivida.title} // Use attivida.title for the title
              description={attivida.description} // Use attivida.description for the description
            />
          </Card>
        ))}
      </div>
  );
};


// something in here is not correct??
const getReligionById = (id : string) => {
  let religion: string;

  switch(id) {
    case String(1):
      religion = 'christianity';
      break;
    case String(2):
      religion = 'buddhism';
      break;
    case String(3):
      religion = 'hinduism';
      break;
    default:
      religion = 'all'; // or any default value you want
  }

  return religion;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return <><div className={styles.home}>
          <Navbar/>
          <Tabs
            defaultActiveKey="1"
            // type="card"
            size={'small'}
            className={styles.religionTabs}
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);   // 1, 2, 3

              const religion = getReligionById(id);   // christianity, buddhism, hinduism
              const capitalizedReligion = religion.charAt(0).toUpperCase() + religion.slice(1).toLowerCase();
            
              return {
                label: capitalizedReligion,
                key: id,
                children: getCardsByReligion(religion),
              };
            })}
          />
        </div></>;
};

export default App;
