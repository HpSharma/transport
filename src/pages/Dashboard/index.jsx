import { Link } from 'react-router-dom';
import {
  MainContainer,
  Tiles,
  TilesContainer,
  tableHeaderStyle,
  tableCellStyle,
} from './StyledComponent.jsx';
import DashboardApiService from '@services/DashboardApiService.js';
import Spinner from '@components/Spinner/Index.jsx';
import Sanckbar from '@components/Snackbar/index.jsx'
import styles from '@pages/Pump/styled.module.scss';
import { useFetch } from '@hooks/useFetch.js';

const Dashboard = () => {
  const { loading, error, data } = useFetch({
    fetchFunction: DashboardApiService.fetchDashboardData,
  });
  const { tilesData, vehicleData } = data || {};
  console.log({ error });

  if (loading) {
    return <Spinner />;
  }

  const handleOpen = () => {
    setSnackOpen(true);
  };

  const handleClose = () => {
    setSnackOpen(false);
  };

  return (
    <>
      <MainContainer>
        <TilesContainer container spacing={4} columns={12}>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <Link to="/pump">
            <h3>Total Vehicles</h3>
            <b>{tilesData.total_vehicles}</b>
            </Link>
          </Tiles>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>
              Total Income <span>(today)</span>
            </h3>
            <b>150000</b>
          </Tiles>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>Total Transporter</h3>
            <b>{tilesData?.total_transporters}</b>
          </Tiles>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>Number of Companies</h3>
            <b>{tilesData?.total_companies}</b>
          </Tiles>
        </TilesContainer>

        {/* Table Section */}
        <div style={{ marginTop: '40px' }}>
          <h2>Vehicle Details</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>#</th>
                <th style={tableHeaderStyle}>Vehicle Number</th>
                <th style={tableHeaderStyle}>Type</th>
                <th style={tableHeaderStyle}>Brand</th>
                <th style={tableHeaderStyle}>Model</th>
                <th style={tableHeaderStyle}>Color</th>
                <th style={tableHeaderStyle}>Reg. Year</th>
                <th style={tableHeaderStyle}>Owner</th>
              </tr>
            </thead>
            <tbody>
              {vehicleData?.length > 0 ? (
                vehicleData?.map((vehicle, index) => (
                  <tr key={index}>
                    <td style={tableCellStyle}>{index + 1}</td>
                    <td style={tableCellStyle}>{vehicle.vehicle_number}</td>
                    <td style={tableCellStyle}>{vehicle.vehicle_type}</td>
                    <td style={tableCellStyle}>{vehicle.brand}</td>
                    <td style={tableCellStyle}>{vehicle.model}</td>
                    <td style={tableCellStyle}>{vehicle.color}</td>
                    <td style={tableCellStyle}>{vehicle.registration_year}</td>
                    <td style={tableCellStyle}>{vehicle.owner_name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td style={tableCellStyle} colSpan="8">
                    No vehicle data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </MainContainer>

      <Sanckbar
        open={Boolean(error)}
        onClose={handleClose}
        message="Action completed successfully!"
        severity="success" // 'error' | 'info' | 'warning' | 'success'
        duration={4000}
      />

    </>
  );
};

export default Dashboard;
