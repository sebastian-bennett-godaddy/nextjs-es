'use client'
import * as React from 'react';
import styles from './centra.module.css'
import { Avatar, Card, Tabs } from 'antd';
import Meta from 'antd/es/card/Meta';
import Navbar from '@/components/nav/Navbar';
import { centreList } from '@/database/centre-list';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return <><div className={styles.home}>
          <Navbar/>
          <div className={styles.header}><h3>Welcome to De La Élitacietè</h3></div>
          <Tabs
        defaultActiveKey="1"
        type="card"
        size={'small'}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Card Tab ${id}`,
            key: id,
            children: `Content of card tab ${id}`,
          };
        })}
      />
          <div className={styles.body}>
            <div className={styles.cardContainer}>
            {/* {Array.of(centreList).map((religionCentre) => {
              return religionCentre.christianity.map((centre) => {
                return (
                  <Card
                    key={centre.id} // Add a key prop for each Card
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
                );
              });
            })} */}
            {Array.of(centreList).map((religionCentre) => {
              return religionCentre.buddhism.map((centre) => {
                return (
                  <Card
                    key={centre.id} // Add a key prop for each Card
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
                );
              });
            })}
            {/* {Array.of(centreList).map((religionCentre) => {
              return religionCentre.hinduism.map((centre) => {
                return (
                  <Card
                    key={centre.id} // Add a key prop for each Card
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
                );
              });
            })} */}
            </div>
          </div>
        </div></>;
};

export default App;
