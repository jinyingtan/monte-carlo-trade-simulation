import { SIMULATE_TRADE } from './types';

const fillNaN = (input) => {
  return isNaN(input) ? 0 : input;
}

const cleanParameter = (parameter) => {
  return parseFloat(Math.abs(fillNaN(parameter)));
}

const cleanTradeParameters = (tradeParameters) => {
  for (let key in tradeParameters) {
    tradeParameters[key] = cleanParameter(tradeParameters[key])
  }

  if ('percentageRisk' in tradeParameters) {
    tradeParameters['percentageRisk'] = tradeParameters['percentageRisk'] / 100;
  }

  tradeParameters['percentageWinRate'] = tradeParameters['percentageWinRate'] / 100;
  tradeParameters['percentageBreakEvenRate'] = tradeParameters['percentageBreakEvenRate'] / 100;

  return tradeParameters;
}

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateWeighedList = (list, weight) => {
  let weighed_list = [];

  // Loop over weights
  for (let i = 0; i < weight.length; i++) {
    let multiples = weight[i] * 100;

    // Loop over the list of items
    for (let j = 0; j < multiples; j++) {
      weighed_list.push(list[i]);
    }
  }

  return weighed_list;
}

//function to balance the array to exact weighted probabilties
const balanceArray = (array, winRate, breakEven, trades) => {
  let noOfOnes = 0, noOfZeros = 0, tempWinRate = Math.floor(winRate * trades), tempBreakEven = Math.floor(breakEven * trades);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      noOfOnes++;
    } else if (array[i] === 0) {
      noOfZeros++;
    }
  }

  return balanceArrayElements(array, noOfOnes, tempWinRate, noOfZeros, tempBreakEven);
}

//recursive checking of array index as the function uses a random start point on an array to search for the index
const checkArrayIndex = (array, serachValue, startPoint) => {
  let arrayIndex = array.indexOf(serachValue, startPoint);
  if (arrayIndex < 0)
    return checkArrayIndex(array, serachValue, rand(0, array.length - 1));
  else {
    return arrayIndex;
  }
}

//recursive functionn to balance the zero and one in the array to the win rate
const balanceArrayElements = (array, number1, validationInteger1, number2, validationInteger2) => {
  if (number1 === validationInteger1 && number2 === validationInteger2) {
    return array;
  } else if (number1 < validationInteger1) {
    let negativeOneIndex = checkArrayIndex(array, -1, rand(0, array.length - 1));
    array[negativeOneIndex] = 1;
    number1++;
    return balanceArrayElements(array, number1, validationInteger1, number2, validationInteger2);
  } else if (number1 > validationInteger1) {
    let oneIndex = checkArrayIndex(array, 1, rand(0, array.length - 1));
    array[oneIndex] = -1;
    number1--;
    return balanceArrayElements(array, number1, validationInteger1, number2, validationInteger2);
  } else if (number2 < validationInteger2) {
    let negativeOneIndex = checkArrayIndex(array, -1, rand(0, array.length - 1));
    array[negativeOneIndex] = 0;
    number2++;
    return balanceArrayElements(array, number1, validationInteger1, number2, validationInteger2);
  } else if (number2 > validationInteger2) {
    let zeroIndex = checkArrayIndex(array, 0, rand(0, array.length - 1));
    array[zeroIndex] = -1;
    number2--;
    return balanceArrayElements(array, number1, validationInteger1, number2, validationInteger2);
  }
}

const getActualTradeOutcome = (trades) => {
  let winTrades = 0;
  let lostTrades = 0;
  let breakEvenTrades = 0;

  trades.forEach(element => {
    if (element === 1) {
      winTrades++;
    } else if (element === 0) {
      breakEvenTrades++;
    } else if (element === -1) {
      lostTrades++;
    }
  });

  const totalTrades = winTrades + lostTrades + breakEvenTrades;
  if (trades.length !== totalTrades) {
    // console.log("Trades not equal! \n Original Trades: " + trades.length + " \n Calculated Trades:" + totalTrades);
  }

  // console.log("Win Rate: " + winTrades + " Losing Trades: " + lostTrades + " Break Even Trades: " + breakEvenTrades);
  // console.log("Win %: " + winTrades / totalTrades * 100 + " Lost %: " + lostTrades / totalTrades * 100);

  const actualOutcomes = { winTrades: winTrades, lostTrades: lostTrades, breakEvenTrades: breakEvenTrades };

  return actualOutcomes;
}

const calPortfolioValue = (portfolioValue, dollarRisk, rewardRisk, tradeResult) => {
  if (dollarRisk > portfolioValue) {
    return false;
  }

  if (tradeResult === -1) {
    portfolioValue -= dollarRisk;
  } else if (tradeResult === 1) {
    portfolioValue = rewardRisk * dollarRisk + portfolioValue;
  }

  return portfolioValue;
}

const convertBinaryToChar = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) array[i] = 'BE';
    else if (array[i] === 1) array[i] = 'W';
    else array[i] = "L";
  }
  return array;
}

const generateTrades = (tradeParameters) => {
  const noOfTrades = tradeParameters['noOfTrades'];
  const percentageWinRate = tradeParameters['percentageWinRate'];
  const percentageBreakEvenRate = tradeParameters['percentageBreakEvenRate']

  const percentageLoseRate = 1 - tradeParameters['percentageWinRate'] - tradeParameters['percentageBreakEvenRate'];
  const probs = [percentageWinRate, percentageBreakEvenRate, percentageLoseRate];
  const tradesSimulationList = [1, 0, -1];
  let tradesSimulation = [];

  let weightedtradesSimulation = generateWeighedList(tradesSimulationList, probs);

  for (let i = 0; i < noOfTrades; i++) {
    //to generate random number from 0 to the length of the weighted list
    //var random_num = rand(0, weightedWinLose.length-1);
    tradesSimulation.push(weightedtradesSimulation[rand(0, weightedtradesSimulation.length - 1)]);
  }

  // Forces the ratio to be exact to what is specified
  tradesSimulation = balanceArray(tradesSimulation, percentageWinRate, percentageBreakEvenRate, noOfTrades);

  // Used to see the actual simulated trade
  getActualTradeOutcome(tradesSimulation);

  return tradesSimulation;
}

const runTrade = (tradeParameters, tradesSimulation) => {

  const VARIABLE_RISK = 0;
  const FIXED_RISK = 1;

  const riskIdentifier = tradeParameters['identifier'];
  const initialPortfolioValue = tradeParameters['initialPortfolioValue'];
  const noOfTrades = tradeParameters['noOfTrades'];
  const rewardRisk = tradeParameters['rewardRiskRatio'];

  let portfolioValue = initialPortfolioValue;
  let portfolio = [initialPortfolioValue.toFixed(2)];
  let monthlyPortfolio = [initialPortfolioValue.toFixed(2)];
  let twelveParts = Math.floor(noOfTrades / 12);
  let sumOfTwelveParts = twelveParts;

  switch (riskIdentifier) {
    case VARIABLE_RISK:
      const percentageRisk = tradeParameters['percentageRisk']

      for (let i = 0; i < tradesSimulation.length; i++) {
        let dollarRisk = percentageRisk * portfolioValue;
        portfolioValue = calPortfolioValue(portfolioValue, dollarRisk, rewardRisk, tradesSimulation[i]);

        if (portfolioValue === false) {
          break;
        } else if ((i + 1) === sumOfTwelveParts || i === tradesSimulation.length - 1) {
          monthlyPortfolio.push(portfolioValue.toFixed(2));
          sumOfTwelveParts += twelveParts;
        }
        portfolio.push(portfolioValue.toFixed(2));
      }

      break;
    case FIXED_RISK:
      const isDoubleRisk = tradeParameters['isDoubleRisk'];
      let dollarRisk = tradeParameters['dollarRisk']  

      if (isDoubleRisk === 1) {
        let doublePortfolioValue = portfolioValue * 2;
        for (let i = 0; i < tradesSimulation.length; i++) {
          if (portfolioValue >= doublePortfolioValue) {
            dollarRisk *= 2;
            doublePortfolioValue *= 2;
          }

          portfolioValue = calPortfolioValue(portfolioValue, dollarRisk, tradesSimulation[i]);
          if (portfolioValue === false) {
            break;
          } else if ((i + 1) === sumOfTwelveParts || i === tradesSimulation.length - 1) {
            monthlyPortfolio.push(portfolioValue.toFixed(2));
            sumOfTwelveParts += twelveParts;
          }
          portfolio.push(portfolioValue.toFixed(2));
        }
      } else {
        for (let i = 0; i < tradesSimulation.length; i++) {
          portfolioValue = calPortfolioValue(portfolioValue, dollarRisk, rewardRisk, tradesSimulation[i]);
          if (portfolioValue === false) {
            break;
          } else if ((i + 1) === sumOfTwelveParts || i === tradesSimulation.length - 1) {
            monthlyPortfolio.push(portfolioValue.toFixed(2));
            sumOfTwelveParts += twelveParts;
          }
          portfolio.push(portfolioValue.toFixed(2));
        }
      }
      break;
    default:
      // TODO: Set error to true
      console.log("Not a valid trade type")
  }

  const simulationResults = {
    'portfolio': portfolio,
    'monthlyPortfolio': monthlyPortfolio,
  }

  // console.log("Final Portfolio Value: " + portfolio[portfolio.length - 1]);

  return simulationResults;
}

export const simulateTrade = (tradeParameters) => dispatch => {
  // tradeParameters = {
  //   identifier: 1,
  //   initialPortfolioValue: 10000,
  //   noOfTrades: 1000,
  //   rewardRiskRatio: 3,
  //   percentageWinRate: 30,
  //   percentageBreakEvenRate: 0,
  //   dollarRisk: 500,
  //   doubleRisk: 0,
  // }

  tradeParameters = cleanTradeParameters(tradeParameters);
  const simulatedTrades = generateTrades(tradeParameters);
  const portfolioResults = runTrade(tradeParameters, simulatedTrades)

  const action = {
    type: SIMULATE_TRADE,
    portfolioResults: portfolioResults,
    trades: simulatedTrades,
    hidden: false
  }

  dispatch(action);
}