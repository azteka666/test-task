import { handlerPath } from '@utils/handler-resolver';

export default {
  planRoute: {
    handler: `${handlerPath(__dirname)}/handler.planRoute`,
    events: [
      {
        http: {
          method: 'get',
          path: 'routes/plan',
          queryStringParameters: {
            fromPlace: {
              required: true,
              type: 'string',
            },
            toPlace: {
              required: true,
              type: 'string',
            },
            time: {
              required: true,
              type: 'string',
            },
            date: {
              required: true,
              type: 'string',
            },
            mode: {
              required: true,
              type: 'string',
            },
            arriveBy: {
              required: true,
              type: 'boolean',
            },
            wheelchair: {
              required: true,
              type: 'boolean',
            },
            showIntermediateStops: {
              required: true,
              type: 'boolean',
            },
            locale: {
              required: true,
              type: 'string',
            },
          },
        },
      },
    ],
  }
};
