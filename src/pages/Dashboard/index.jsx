import { useEffect, useState } from 'react';

import Header from '@components/Header';
import SideBar from '@components/SideBar/index.jsx';
import { MainContainer, Tiles, TilesContainer } from './StyledComponent.jsx';
import DashboardApiService from '@services/DashboardApiService.js';

const Dashboard = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [tilesData, setTilesData] = useState({});

  useEffect(() => {
    const fetchTitlesDetails = async () => {
      const result = await DashboardApiService.fetchDashboardTilesDetails();
      setTilesData(result);
    };
    fetchTitlesDetails();
  }, []);

  const toggleOpenSideBar = () => {
    setOpenSideBar((prevState) => !prevState);
  };

  return (
    <>
      <Header toggleOpenSideBar={toggleOpenSideBar} />
      <SideBar open={openSideBar} toggleOpen={toggleOpenSideBar} />

      <MainContainer>
        <TilesContainer container spacing={4} columns={12}>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>Total Vehicles</h3>
            <b>{tilesData.vehicles}</b>
          </Tiles>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>
              Total Income <span>(today)</span>
            </h3>
            <b>{tilesData.income}</b>
          </Tiles>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>Total Transporter</h3>
            <b>{tilesData.transporter}</b>
          </Tiles>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>Number of Companies</h3>
            <b>{tilesData.companies}</b>
          </Tiles>
        </TilesContainer>
      </MainContainer>
    </>
  );
};

export default Dashboard;
