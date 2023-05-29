import { carbonFootprintMultipliers } from '@utils/constants';

export const getItinerariesWithCO2Info = (itineraries) => itineraries.map(({
  duration,
  endTime,
  legs,
  startTime,
}) => {
  let itineraryIndex = 0;
  let itineraryDistance = 0;

  const legsWithInfo = legs.map(itineraryLeg => {
    const { duration, mode, distance, routeShortName } = itineraryLeg
    const itineraryLegIndex = carbonFootprintMultipliers[mode] * duration;

    itineraryIndex += itineraryLegIndex;
    itineraryDistance += distance;

    return {
      co2: itineraryLegIndex,
      mode,
      distance,
      routeShortName,
    };
  });

  return {
    co2: itineraryIndex,
    startTime: new Date(startTime).toISOString(),
    endTime: new Date(endTime).toISOString(),
    duration,
    distance: itineraryDistance,
    legs: legsWithInfo,
  };
});
