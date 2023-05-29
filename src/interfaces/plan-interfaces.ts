import { Locale, RoutingMode } from '@utils/enums';

export interface IRoutePlanParams {
  fromPlace: string;
  toPlace: string;
  time: string;
  date: string;
  mode: string;
  arriveBy: boolean;
  wheelchair: boolean;
  showIntermediateStops: boolean;
  locale: string;
}

export interface ICoordinates {
  lat: number;
  lon: number;
}

export interface IRoutePoint extends ICoordinates {
  departure?: number;
  name: string;
  vertexType: string;
}

export interface IItineraryLegStep extends ICoordinates {
  absoluteDirection: string;
  area: boolean;
  bogusName: boolean;
  distance: number;
  elevation: string;
  relativeDirection: string;
  stayOn: string;
  streetName: string;
  walkingBike: boolean;
}

export interface IItineraryLeg {
  agencyTimeZoneOffset: number;
  arrivalDelay: number;
  departureDelay: number;
  distance: number;
  duration: number;
  endTime: number;
  from: IRoutePoint;
  generalizedCost: number;
  interlineWithPreviousLeg: boolean;
  legGeometry: {
    length: number;
    points: string;
  };
  mode: RoutingMode;
  pathway: boolean;
  realTime: number;
  rentedBike: boolean;
  route: string;
  routeShortName?: string;
  startTime: number;
  steps: IItineraryLegStep[];
  to: IRoutePoint;
  transitLeg: boolean;
  walkingBike: boolean;
}

export interface IItinerary {
  arrivedAtDestinationWithRentedBicycle: boolean;
  duration: number;
  elevationGained: number;
  elevationLost: number;
  endTime: number;
  fare: {
    details: unknown;
    fare: unknown;
  };
  generalizedCost: number;
  startTime: number;
  tooSloped: boolean;
  transfers: number;
  transitTime: number;
  waitingTime: number;
  walkDistance: number;
  walkLimitExceeded: boolean;
  walkTime: number;
  legs: IItineraryLeg[];
}

export interface IPlan {
  date: number;
  from: IRoutePoint;
  itineraries: IItinerary[];
  to: IRoutePoint;
}

export class IRoutePlan {
  requestParameters: {
    arriveBy: boolean;
    date: string;
    fromPlace: string;
    locale: Locale;
    mode: string;
    time: string;
    toPlace: string;
    wheelchair: boolean;
  };
  plan: IPlan;
  error: {
    id: number;
    message: string;
    msg: string;
  };
}
