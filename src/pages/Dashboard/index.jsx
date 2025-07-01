import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MainContainer, TilesContainer } from './StyledComponent.jsx';
import DashboardApiService from '@services/DashboardApiService.js';
import Tiles from '@components/common/Tiles/index.jsx';
import { Grid } from '@mui/material';

const Dashboard = () => {
  const [tilesData, setTilesData] = useState([]);

  useEffect(() => {
    const fetchTitlesDetails = async () => {
      const result = await DashboardApiService.fetchDashboardTilesDetails();
      setTilesData(result);
    };
    fetchTitlesDetails();
  }, []);
  return (
    <>
      <MainContainer>
        <TilesContainer container spacing={4} columns={12}>
          {tilesData?.map((item, index) => {
            return (
              <Grid
                key={item.title + '-' + index}
                size={{ xs: 12, sm: 6, md: 3 }}
              >
                <Link to={'/pump'}>
                  <Tiles>
                    <Tiles.Header>{item.title}</Tiles.Header>
                    <Tiles.Content>
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>{item.count}</span>
                        <span>➡</span>
                      </div>
                    </Tiles.Content>
                    asdfasdfasdfasdfasdfasdf
                  </Tiles>
                </Link>
              </Grid>
            );
          })}
        </TilesContainer>
      </MainContainer>
    </>
  );
};

export default Dashboard;
