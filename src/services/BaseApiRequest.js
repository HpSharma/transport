
import axiosInstance from '@interceptors/axiosInterceptor.js';
import { AxiosError } from 'axios';

class BaseApiRequest {
  static handleSuccess(response) {
    return {
      status: response.status,
      data: response,
      success: true,
    };
  }

  static handleError(error) {
    if (error instanceof AxiosError) {
      return {
        status: error.code,
        data: [],
        success: false,
        message: error.message ?? 'Error occurred!',
      };
    } else if (error instanceof Error) {
      return {
        status: error.status || 500,
        data: [],
        success: false,
        message: error.message ?? 'Error occurred!',
      };
    } else {
      return {
        status: error.status || 500,
        data: [],
        success: false,
        message: 'Error occurred!',
      };
    }
  }

  static async get(url, config = {}) {
    try {
      const response = await axiosInstance.get(url, config);
      return this.handleSuccess(response);
    } catch (error) {
      return Promise.reject(this.handleError(error));
    }
  }

  static async post(url, config = {}) {
    try {
      const response = await axiosInstance.post(url, config);
      return this.handleSuccess(response);
    } catch (error) {
      return Promise.reject(this.handleError(error));
    }
  }
}


export default BaseApiRequest;
