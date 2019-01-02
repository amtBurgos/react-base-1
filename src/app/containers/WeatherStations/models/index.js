import { Record, Map } from 'immutable';
import { generateImmutable } from 'base/shared/ModelHelper';

import WeatherStationsModel from './WeatherStationsModel';
import ForecastModel from './ForecastModel';
import WeatherStationDetailsModel from './WeatherStationDetailsModel';

const WeatherStationsCollection = Record({
  data: Map(),
  stationSelected: -1,
  forecast: Map(),
  weatherStationDetails: Map(),
});

const setInitialState = (initialState) => {
  // eslint-disable-next-line no-param-reassign
  initialState.WeatherStations = new WeatherStationsCollection({
    data: generateImmutable({}, WeatherStationsModel),
  });
  return initialState;
};

export {
  WeatherStationsModel,
  WeatherStationsCollection,
  ForecastModel,
  WeatherStationDetailsModel,
  setInitialState,
};
