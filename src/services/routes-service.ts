import { IRoutePlanParams } from '@interfaces/plan-interfaces';
import OpenTripService from '@services/openTrip-servcies';
import { IRouteWithData } from '@interfaces/route-interfaces';
import { getItinerariesWithCO2Info } from '@utils/helpers';

class RoutesService {
  openTripService: OpenTripService;

  constructor() {
    this.openTripService = new OpenTripService();
  }

  async getRouteWithData(params: IRoutePlanParams): Promise<IRouteWithData> {
    const {
      plan: {
        from,
        to,
        itineraries,
      },
    } = await this.openTripService.getOpenTripRoutePlan(params);

    const startLocationCoordinates = [from.lat, from.lon];
    const endLocationCoordinates = [to.lat, to.lon];

    const itinerariesWithCO2EmissionInfo = getItinerariesWithCO2Info(itineraries);

    return {
      from: { coordinates: startLocationCoordinates },
      to: { coordinates: endLocationCoordinates },
      itineraries: itinerariesWithCO2EmissionInfo,
    };
  }
}

export default RoutesService;
