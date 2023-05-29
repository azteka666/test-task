import middy from '@middy/core';
import type { AWS } from '@serverless/typescript';
import middyJsonBodyParser from '@middy/http-json-body-parser';
import type { Handler } from 'aws-lambda';

import {
  HttpErrorHandler,
  ApiGatewayResponseHandler,
} from '@common/middlewares';


export const middyfy = (handler: Handler) => middy(handler)
  .use(middyJsonBodyParser())
  .use(HttpErrorHandler())
  .use(ApiGatewayResponseHandler())

export type AWSFunction = AWS['functions'][0];
