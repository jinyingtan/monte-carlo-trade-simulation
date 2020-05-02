import { combineReducers } from 'redux';
import tradeSimulationReducer from './tradeSimulationReducer';

// Takes all the reducer and make into one reducer that you can add to your store
export default combineReducers({
  tradeParameters: tradeSimulationReducer,
  // Add more reducers here is needed
});