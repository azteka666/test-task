import middy from '@middy/core';
import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import { APIResponse } from '@common/httpRequestHandlers/response';
import { HttpError } from '@common/httpRequestHandlers/http.error';

import MiddlewareFunction = middy.MiddlewareFn;

const HttpErrorMiddleware = () => {
  const onError: MiddlewareFunction<APIGatewayProxyEvent, APIGatewayProxyResult> = async (request): Promise<any> => {
    const { error } = request;
    let response = APIResponse.error();

    if (error instanceof HttpError) {
      response = APIResponse.error(error.statusCode, error.message);
    }

    request.response = response;
  };

  return { onError };
};

export default HttpErrorMiddleware;
