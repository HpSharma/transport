import { Link } from 'react-router-dom';
import {
  MainContainer,
  TilesContainer,
  tableHeaderStyle,
  tableCellStyle,
} from './StyledComponent.jsx';
import DashboardApiService from '@services/DashboardApiService.js';
import Spinner from '@components/Spinner/Index.jsx';
import Sanckbar from '@components/Snackbar/index.jsx';
import { useFetch } from '@hooks/useFetch.js';
import Tiles from '@components/common/Tiles/index.jsx';
import { Grid } from '@mui/material';

const Dashboard = () => {
  const { loading, error, data } = useFetch({
    fetchFunction: DashboardApiService.fetchDashboardData,
  });
  const [tilesData, vehicleData] = data || [[], []];
  console.log({ tilesData }, { vehicleData });

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <MainContainer>
        <TilesContainer container spacing={4} columns={12}>
          {tilesData?.map((tile, idx) => {
            return (
              <Grid key={`${tile.name}-${idx}`} size={{ xs: 12, sm: 6, md: 3 }}>
                <Tiles>
                  <Tiles.Header>{tile.name}</Tiles.Header>
                  <Tiles.Content>{tile.value}</Tiles.Content>
                </Tiles>
              </Grid>
            );
          })}
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
        message={error?.message}
        severity="error"
      />
    </>
  );
};

export default Dashboard;
