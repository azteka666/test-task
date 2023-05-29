import type { APIGatewayProxyResult } from 'aws-lambda';

import type { CustomResponse } from './types/response.type';


export class APIResponse {
  static success(data?: any): APIGatewayProxyResult {
    return this.build(200, data);
  }

  static error(statusCode = 500, message = 'Something went wrong. Please try again later'): APIGatewayProxyResult {
    return this.build(statusCode, {
      statusCode,
      message,
    });
  }

  static build(statusCode: number, apiResponse: CustomResponse): APIGatewayProxyResult {
    return {
      statusCode: statusCode,
      body: JSON.stringify(apiResponse),
    };
  }
}
