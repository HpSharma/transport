import { useEffect, useState } from 'react';
import {
  MainContainer,
  Tiles,
  TilesContainer,
  tableHeaderStyle,
  tableCellStyle,
} from './StyledComponent.jsx';
import DashboardApiService from '@services/DashboardApiService.js';
import Spinner from '@components/Spinner/Index.jsx';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [tilesData, setTilesData] = useState({});
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    const fetchTitlesDetails = async () => {
      setLoading(true);
      try {
        const result = await DashboardApiService.fetchDashboardTilesDetails();
        setTilesData(result.data?.data);
        const res = await DashboardApiService.fetchVehicleDetails();
        setVehicleData(res.data?.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };

    fetchTitlesDetails();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <MainContainer>
        <TilesContainer container spacing={4} columns={12}>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>Total Vehicles</h3>
            <b>{tilesData.total_vehicles}</b>
          </Tiles>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>
              Total Income <span>(today)</span>
            </h3>
            <b>150000</b>
          </Tiles>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>Total Transporter</h3>
            <b>{tilesData.total_transporters}</b>
          </Tiles>
          <Tiles size={{ xs: 12, sm: 6, md: 3 }}>
            <h3>Number of Companies</h3>
            <b>{tilesData.total_companies}</b>
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
              {vehicleData.length > 0 ? (
                vehicleData.map((vehicle, index) => (
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
    </>
  );
};

export default Dashboard;
