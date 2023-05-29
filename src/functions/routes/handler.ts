import { ValidatedEventAPIGatewayProxyEvent } from '@utils/api-gateway';
import { middyfy } from '@utils/lambda';
import { GeneralError } from '@common/httpRequestHandlers/http.error';
import { APIResponse } from '@common/httpRequestHandlers/response';
import { IRoutePlanParams } from '@interfaces/plan-interfaces';
import RoutesService from '@services/routes-service';
import { IRouteWithData } from '@interfaces/route-interfaces';


export const planRoute: ValidatedEventAPIGatewayProxyEvent<IRouteWithData> = middyfy(async (event) => {
  try {
    const routePlanDto: IRoutePlanParams = { ...event.queryStringParameters };

    const routesService = new RoutesService();
    const routeWithData = await routesService.getRouteWithData(routePlanDto);

    return APIResponse.success(routeWithData);
  } catch (e) {
    throw new GeneralError(e);
  }
});
