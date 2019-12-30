export const MIN_INITAL_PORTFOLIO_VALUE = 1;
export const MAX_NO_OF_TRADES = 5000;
export const MAX_SUM_RATE = 100;
export const MAX_PERCENTAGE_RISK = 100;
export const MIN_DOLLAR_RISK = 0;

export const ERROR_MSG_PORTFOLIO_VALUE = `Initial portfolio value must be >= ${MIN_INITAL_PORTFOLIO_VALUE}`;
export const ERROR_MSG_NO_OF_TRADES = `Number of trades cannot be > ${MAX_NO_OF_TRADES}`;
export const ERROR_MSG_SUM_RATE = `Sum of % win rate and break even cannot be > ${MAX_SUM_RATE}`;
export const ERROR_MSG_PERCENTAGE_RISK = `% risk cannot be > ${MAX_PERCENTAGE_RISK}`;
export const ERROR_MSG_DOLLAR_RISK = `Dollar risk value must be >= ${MIN_DOLLAR_RISK}`;
export const ERROR_MSG_INPUT_VALIDATION = 'Some input fields are not valid';