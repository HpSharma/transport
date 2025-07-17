import BaseApiRequest from '@services/BaseApiRequest.js';

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
    // return await BaseApiRequest.get(
    //   'http://localhost/quizapplication/dashboard.php'
    // );

    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: 'a',
            value: 12,
          },
          {
            name: 'b',
            value: 32,
          },
          {
            name: 'c',
            value: 42,
          },
          {
            name: 'd',
            value: 62,
          },
        ]);
      }, 1000);
    });
  };

  // for fetching vehicle details
  static fetchVehicleDetails = async () => {
    // return await BaseApiRequest.get(
    //   'http://localhost/quizapplication/get_vehicle_details.php'
    // );
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 1000);
    });
  };
}

export default DashboardApiService;
