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
import CommonTable from '@components/Table/index.jsx';

const Dashboard = () => {
  const { loading, error, data: response } = useFetch({
    fetchFunction: DashboardApiService.fetchDashboardData,
  });

  const tilesRaw = response?.[0]?.data || {};
  const vehicleData = response?.[1]?.data?.data || [];

  const tilesData = Object.entries(tilesRaw).map(([name, value]) => ({
    name,
    value,
  }));

  const columns = [
    '#',
    'Vehicle Number',
    'Type',
    'Brand',
    'Model',
    'Color',
    'Reg. Year',
    'Owner',
  ];

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <MainContainer>
        {/* Tiles Section */}
        <TilesContainer container spacing={4} columns={12}>
          {tilesData.map((tile, idx) => (
            <Grid key={`${tile.name}-${idx}`} item xs={12} sm={6} md={3}>
              <Tiles>
                <Tiles.Header>{tile.name}</Tiles.Header>
                <Tiles.Content>{String(tile.value)}</Tiles.Content>
              </Tiles>
            </Grid>
          ))}
        </TilesContainer>

        {/* Table Section */}
        <div style={{ marginTop: '40px' }}>
          <h2>Vehicle Details</h2>

          <CommonTable
            columns={['#', 'Vehicle Number', 'Type', 'Brand', 'Model', 'Color', 'Reg. Year', 'Owner']}
            data={vehicleData}
            renderRow={(vehicle, index) => (
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
            )}
            headerStyle={tableHeaderStyle}
            cellStyle={tableCellStyle}
          />

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
