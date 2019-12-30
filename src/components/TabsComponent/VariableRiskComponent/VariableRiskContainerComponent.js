import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { simulateTrade } from '../../../actions/tradesActions'

import VariableRiskComponent from './VariableRiskComponent'
// import { MIN_INITAL_PORTFOLIO_VALUE, MAX_NO_OF_TRADES, MAX_SUM_RATE, MAX_PERCENTAGE_RISK } from '../validInput';
// import { ERROR_MSG_PORTFOLIO_VALUE, ERROR_MSG_NO_OF_TRADES, ERROR_MSG_SUM_RATE, ERROR_MSG_PERCENTAGE_RISK, ERROR_MSG_INPUT_VALIDATION } from '../validInput';

function VariableRiskContainerComponent(props) { 
  const { value, index, dir } = props;

  const [initialPortfolioValue, setInitialPortfolioValue] = React.useState("");
  const [noOfTrades, setNoOfTrades] = React.useState("");
  const [rewardRiskRatio, setRewardRiskRatio] = React.useState("");
  const [percentageRisk, setPercentageRisk] = React.useState("");
  const [percentageWinRate, setPercentageWinRate] = React.useState("");
  const [percentageBreakEvenRate, setPercentageBreakEvenRate] = React.useState("");

  // const [hasError, setHasError] = React.useState(false);
  // const [errorMsg, setErrorMsg] = React.useState(undefined);

  const setInputValue = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  }

  // const inputValidation = () => {
  //   let hasAnyError = false;
    
  //   if (initialPortfolioValue < MIN_INITAL_PORTFOLIO_VALUE) {
  //     hasAnyError = true;
  //   }
    
  //   // To prevent overflow on display
  //   if (noOfTrades > MAX_NO_OF_TRADES) {
  //     hasAnyError = true;
  //   }

  //   if (hasAnyError) {
  //     console.log("hello")
  //     setHasError(true);
  //     setErrorMsg(ERROR_MSG_INPUT_VALIDATION);
  //   }
  // }

  const calculate = () => {
    // let isAllInputsValid = inputValidation();

    const tradeParameters = {
      identifier: 0,
      initialPortfolioValue: initialPortfolioValue,
      noOfTrades: noOfTrades,
      rewardRiskRatio: rewardRiskRatio,
      percentageWinRate: percentageWinRate,
      percentageBreakEvenRate: percentageBreakEvenRate,
      percentageRisk: percentageRisk,
      doubleRisk: false
    };

    props.simulateTrade(tradeParameters);

    setInitialPortfolioValue("");
    setNoOfTrades("");
    setRewardRiskRatio("");
    setPercentageRisk("");
    setPercentageWinRate("");
    setPercentageBreakEvenRate("");
  }

  // const handleSnackbarClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setHasError(false);
  //   setErrorMsg(undefined)
  // };

  return (
    <VariableRiskComponent
      value={value}
      index={index}
      dir={dir}
      initialPortfolioValue={initialPortfolioValue}
      setInitialPortfolioValue={setInitialPortfolioValue}
      noOfTrades={noOfTrades}
      setNoOfTrades={setNoOfTrades}
      rewardRiskRatio={rewardRiskRatio}
      setRewardRiskRatio={setRewardRiskRatio}
      percentageRisk={percentageRisk}
      setPercentageRisk={setPercentageRisk}
      percentageWinRate={percentageWinRate}
      setPercentageWinRate={setPercentageWinRate}
      percentageBreakEvenRate={percentageBreakEvenRate}
      setPercentageBreakEvenRate={setPercentageBreakEvenRate}
      setInputValue={setInputValue}
      calculate={calculate}
      // hasError={hasError}
      // errorMsg={errorMsg}
      // handleSnackbarClose={handleSnackbarClose}
    />
  )
}

VariableRiskContainerComponent.propTypes = {
  simulateTrade: PropTypes.func.isRequired
};

export default connect(null, { simulateTrade })(VariableRiskContainerComponent);