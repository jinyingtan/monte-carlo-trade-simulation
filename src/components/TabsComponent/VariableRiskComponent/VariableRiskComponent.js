import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    padding: '2rem 0',
  },
  inputFieldContainer: {
    marginBottom: '2rem',
  },
  inputFields: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50%'
    }
  }
})

function VariableRiskComponent(props) {
  const { value, index, dir, classes } = props;
  const { initialPortfolioValue, setInitialPortfolioValue } = props;
  const { noOfTrades, setNoOfTrades } = props;
  const { rewardRiskRatio, setRewardRiskRatio } = props;
  const { percentageRisk, setPercentageRisk } = props;
  const { percentageWinRate, setPercentageWinRate } = props;
  const { percentageBreakEvenRate, setPercentageBreakEvenRate } = props;
  const { setInputValue, calculate } = props;
  
  return (
    <Box
      className={classes.root}
      diplay="flex"
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id="variable-risk"
      aria-labelledby={`tab-${index}`}
      dir={dir}
    >
      <div className={classes.inputFieldContainer}>
        <TextField
          variant="outlined"
          type="number"
          className={classes.inputFields}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          id="initialPortfolioValue"
          label="Intial Portfolio Value"
          value={initialPortfolioValue}
          onChange={(event) => setInputValue(event, setInitialPortfolioValue)}
        />
      </div>

      <div className={classes.inputFieldContainer}>
        <TextField
          variant="outlined"
          type="number"
          className={classes.inputFields}
          id="noOfTrades"
          helperText="per year"
          label="No of Trades"
          value={noOfTrades}
          onChange={(event) => setInputValue(event, setNoOfTrades)}
        />
      </div>

      <div className={classes.inputFieldContainer}>
        <TextField
          variant="outlined"
          type="number"
          className={classes.inputFields}
          id="rewardRiskRatio"
          label="Reward Risk Ratio"
          value={rewardRiskRatio}
          onChange={(event) => setInputValue(event, setRewardRiskRatio)}
        />
      </div>

      <div className={classes.inputFieldContainer}>
        <TextField
          variant="outlined"
          type="number"
          className={classes.inputFields}
          InputProps={{
            endAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
          id="percentageRisk"
          helperText="per trade"
          label="Percentage Risk"
          value={percentageRisk}
          onChange={(event) => setInputValue(event, setPercentageRisk)}
        />
      </div>

      <div className={classes.inputFieldContainer}>
        <TextField
          variant="outlined"
          type="number"
          className={classes.inputFields}
          InputProps={{
            endAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
          id="percentageWinRate"
          label="Percentage Win Rate"
          value={percentageWinRate}
          onChange={(event) => setInputValue(event, setPercentageWinRate)}
        />
      </div>

      <div className={classes.inputFieldContainer}>
        <TextField
          variant="outlined"
          type="number"
          className={classes.inputFields}
          InputProps={{
            endAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
          id="percentageBreakEvenRate"
          label="Percentage Break Even Risk"
          value={percentageBreakEvenRate}
          onChange={(event) => setInputValue(event, setPercentageBreakEvenRate)}
        />
      </div>

      <div className={classes.inputFieldContainer}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={calculate}
        >
          Calculate
        </Button>
      </div>
    </Box>
  );
}

export default withStyles(styles)(VariableRiskComponent)