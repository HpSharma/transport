import Header from '../../components/Header/index.jsx';
import SideBar from '../../components/SideBar/index.jsx';
import { useState } from 'react';
import { MainContainer, Tiles, TilesContainer } from './StyledComponent.jsx';

const Dashboard = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

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
            <b>125</b>
          </Tiles>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>
              Total Income <span>(today)</span>
            </h3>
            <b>152,000.00</b>
          </Tiles>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>Total Transporter</h3>
            <b>62</b>
          </Tiles>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>Number of Companies</h3>
            <b>12</b>
          </Tiles>
        </TilesContainer>
      </MainContainer>
    </>
  );
};

export default Dashboard;
