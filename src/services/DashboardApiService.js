
import BaseApiRequest from '@services/BaseApiRequest.js';

class DashboardApiService extends BaseApiRequest {
  constructor() {
    super();
  }
// for fetching tiles data
  static fetchDashboardTilesDetails = async () => {
    return await BaseApiRequest.get('http://localhost/quizapplication/dashboard.php');
  };

  // for fetching vehicle details
  static fetchVehicleDetails = async () => {
    return await BaseApiRequest.get('http://localhost/quizapplication/get_vehicle_details.php');
  };
}

export default DashboardApiService;
