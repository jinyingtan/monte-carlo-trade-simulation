import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { simulateTrade } from '../../../actions/tradesActions'

import VariableRiskComponent from './VariableRiskComponent'

function VariableRiskContainerComponent(props) {
  const { value, index, dir } = props;

  const [initialPortfolioValue, setInitialPortfolioValue] = React.useState("");
  const [noOfTrades, setNoOfTrades] = React.useState("");
  const [rewardRiskRatio, setRewardRiskRatio] = React.useState("");
  const [percentageRisk, setPercentageRisk] = React.useState("");
  const [percentageWinRate, setPercentageWinRate] = React.useState("");
  const [percentageBreakEvenRate, setPercentageBreakEvenRate] = React.useState("");

  const setInputValue = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  }

  const calculate = () => {
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
    />
  )
}

VariableRiskContainerComponent.propTypes = {
  simulateTrade: PropTypes.func.isRequired
};

export default connect(null, { simulateTrade } )(VariableRiskContainerComponent);