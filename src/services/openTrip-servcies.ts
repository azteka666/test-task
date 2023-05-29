import axios, { AxiosInstance } from 'axios';
import {  NotFoundError } from '@common/httpRequestHandlers/http.error';
import { IRoutePlanParams, IRoutePlan } from '@interfaces/plan-interfaces';

class OpenTripService {
  API: AxiosInstance;

  constructor() {
    this.API = axios.create({
      baseURL: process.env.OPEN_TRIP_PLANNER_API_URL,
      headers: {
        'x-api-key': process.env.OPEN_TRIP_PLANNER_API_KEY,
      },
    });
  }

  async getOpenTripRoutePlan(params: IRoutePlanParams): Promise<IRoutePlan> {
    const { data } = await this.API.get(`/otp/routers/default/plan`, {
      params,
    });

    if (data.error) {
      throw new NotFoundError(data.error.msg);
    }

    return data;
  }
}

export default OpenTripService;
