import { RoutingMode } from '@utils/enums';

export const carbonFootprintMultipliers: { [key in RoutingMode]: number } = {
  [RoutingMode.AIRPLANE]: 144,
  [RoutingMode.BICYCLE]: 0,
  [RoutingMode.BICYCLE_PARK]: 0,
  [RoutingMode.BICYCLE_RENT]: 0,
  [RoutingMode.BUS]: 74,
  [RoutingMode.CABLE_CAR]: 160,
  [RoutingMode.CAR]: 160,
  [RoutingMode.CAR_PARK]: 160,
  [RoutingMode.FERRY]: 144,
  [RoutingMode.FUNICULAR]: 54,
  [RoutingMode.GONDOLA]: 0,
  [RoutingMode.RAIL]: 14,
  [RoutingMode.SUBWAY]: 74,
  [RoutingMode.TRAM]: 54,
  [RoutingMode.WALK]: 0,
};

