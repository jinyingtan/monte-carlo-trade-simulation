import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { simulateTrade } from '../../../actions/tradesActions'

import FixedRiskComponent from './FixedRiskComponent'

function FixedRiskContainerComponent(props) {
  const { value, index, dir } = props;

  const [initialPortfolioValue, setInitialPortfolioValue] = React.useState("");
  const [noOfTrades, setNoOfTrades] = React.useState("");
  const [rewardRiskRatio, setRewardRiskRatio] = React.useState("");
  const [dollarRisk, setDollarRisk] = React.useState("");
  const [isDoubleRisk, setIsDoubleRisk] = React.useState(false);
  const [percentageWinRate, setPercentageWinRate] = React.useState("");
  const [percentageBreakEvenRate, setPercentageBreakEvenRate] = React.useState("");

  const setInputValue = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  }

  const handleCheckboxChanges = (event, setStateFunction) => {
    setStateFunction(event.target.checked)
  }

  const calculate = () => {
    const tradeParameters = {
      identifier: 1,
      initialPortfolioValue: initialPortfolioValue,
      noOfTrades: noOfTrades,
      rewardRiskRatio: rewardRiskRatio,
      percentageWinRate: percentageWinRate,
      percentageBreakEvenRate: percentageBreakEvenRate,
      dollarRisk: dollarRisk,
      isDoubleRisk: isDoubleRisk
    }; 

    props.simulateTrade(tradeParameters);

    setInitialPortfolioValue("");
    setNoOfTrades("");
    setRewardRiskRatio("");
    setDollarRisk("");
    setPercentageWinRate("");
    setPercentageBreakEvenRate("");
  }

  return (
    <FixedRiskComponent 
      value={value}
      index={index}
      dir={dir}
      initialPortfolioValue={initialPortfolioValue}
      setInitialPortfolioValue={setInitialPortfolioValue}
      noOfTrades={noOfTrades}
      setNoOfTrades={setNoOfTrades}
      rewardRiskRatio={rewardRiskRatio}
      setRewardRiskRatio={setRewardRiskRatio}
      dollarRisk={dollarRisk}
      setDollarRisk={setDollarRisk}
      isDoubleRisk={isDoubleRisk}
      setIsDoubleRisk={setIsDoubleRisk}
      percentageWinRate={percentageWinRate}
      setPercentageWinRate={setPercentageWinRate}
      percentageBreakEvenRate={percentageBreakEvenRate}
      setPercentageBreakEvenRate={setPercentageBreakEvenRate}
      setInputValue={setInputValue}
      handleCheckboxChanges={handleCheckboxChanges}
      calculate={calculate}
    />
  )
}

FixedRiskContainerComponent.propTypes = {
  simulateTrade: PropTypes.func.isRequired
};

export default connect(null, { simulateTrade } )(FixedRiskContainerComponent);