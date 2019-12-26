import { SIMULATE_TRADE } from '../actions/types';

const initialState = {
  trades: [],
  portfolioResults: {}, 
  hidden: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIMULATE_TRADE: 
      return {
        ...state, 
        portfolioResults: action.portfolioResults,
        trades: action.trades,
        hidden: action.hidden 
      }
    default:
      return state
  }
}