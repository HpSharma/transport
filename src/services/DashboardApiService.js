import BaseApiRequest from '@services/BaseApiRequest.js';
import Tiles from '@components/common/Tiles/index.jsx';

class DashboardApiService extends BaseApiRequest {
  constructor() {
    super();
  }

  static fetchDashboardData = async () => {
    return await Promise.all([
      DashboardApiService.fetchDashboardTilesDetails(),
      DashboardApiService.fetchVehicleDetails(),
    ]);
  };





  // for fetching tiles data
  static fetchDashboardTilesDetails = async () => {
    return await BaseApiRequest.get(
      'http://localhost/quizapplication/dashboard.php'
    );
  };

  // for fetching vehicle details
  static fetchVehicleDetails = async () => {
    return await BaseApiRequest.get(
      'http://localhost/quizapplication/get_vehicle_details.php'
    );
  };
}

export default DashboardApiService;
