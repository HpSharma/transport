import BaseApiRequest from '@services/BaseApiRequest.js';

class DashboardApiService extends BaseApiRequest {
  constructor() {
    super();
  }

  static fetchDashboardTilesDetails = async () => {
    // return await BaseApiRequest.get('/dashboard/tiles');
    return Promise.resolve({
      vehicles: 200,
      income: 150000,
      transporter: 65,
      companies: 48,
    });
  };
}

export default DashboardApiService;
