import BaseApiRequest from '@services/BaseApiRequest.js';

class DashboardApiService extends BaseApiRequest {
  constructor() {
    super();
  }

  static fetchDashboardTilesDetails = async () => {
    // return await BaseApiRequest.get('/dashboard/tiles');
    return Promise.resolve([
      {
        title: 'Total vehicle',
        count: 125,
      },
      {
        title: 'Total income',
        count: 150000,
      },
      {
        title: 'Number of transporter',
        count: 65,
      },
      {
        title: 'Involved companies',
        count: 58,
      },
    ]);
  };
}

export default DashboardApiService;
