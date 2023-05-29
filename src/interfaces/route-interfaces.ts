import { RoutingMode } from '@utils/enums';

export interface IItineraryLeg {
  co2: number;
  distance: number;
  mode: RoutingMode;
  routeShortName?: string;
}

export interface IItinerary {
  co2: number;
  distance: number;
  duration: number;
  endTime: string;
  legs: IItineraryLeg[];
  startTime: string;
}

export interface IRouteWithData {
  from: {
    coordinates: number[];
  };
  to: {
    coordinates: number[];
  };
  itineraries: IItinerary[];
}
