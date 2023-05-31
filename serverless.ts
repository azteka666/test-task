import type { AWS } from '@serverless/typescript';
import functions from '@functions/index';

const serverlessConfiguration: AWS = {
  service: 'aws-serverless-co2',
  frameworkVersion: '3',
  plugins: [
    'serverless-esbuild',
    'serverless-offline',
/*    'serverless-dotenv-plugin',*/
    // optionally enable for local development
  ],
  useDotenv: true,
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      OPEN_TRIP_PLANNER_API_URL: '${self:custom.OPEN_TRIP_PLANNER_API_URL.${opt:stage}}',
      OPEN_TRIP_PLANNER_API_KEY: '${self:custom.OPEN_TRIP_PLANNER_API_KEY.${opt:stage}}',
    },
  },
  // import the function via paths
  functions,
  package: { individually: true },
  custom: {
    OPEN_TRIP_PLANNER_API_URL: {
      dev: '${env:OPEN_TRIP_PLANNER_API_URL}',
    },
    OPEN_TRIP_PLANNER_API_KEY: {
      dev: '${env:OPEN_TRIP_PLANNER_API_KEY}',
    },
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
