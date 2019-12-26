import { combineReducers } from 'redux';
import tradeSimulationReducer from './tradeSimulationReducer';

export default combineReducers({
  tradeParameters: tradeSimulationReducer,
});