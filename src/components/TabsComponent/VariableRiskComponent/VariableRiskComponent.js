import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

// import Snackbar from '@material-ui/core/Snackbar';
// import Slide from '@material-ui/core/Slide';
// import SnackbarContent from '@material-ui/core/SnackbarContent';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import WarningIcon from '@material-ui/icons/Warning';
// import { amber } from '@material-ui/core/colors';

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
  },
  // snackBar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: amber[700],
  // },
  // snackBarMessage: {
  //   display: 'flex',
  //   alignItems: 'center',
  // },
  // snackBarIcon: {
  //   fontSize: 16,
  //   opacity: 0.9,
  //   marginRight: theme.spacing(1),
  //   [theme.breakpoints.up('sm')]: {
  //     fontSize: 20,
  //   }
  // }
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

  // props for Snackbar
  // const { hasError, errorMsg } = props;
  // const { handleSnackbarClose } = props;

  return (
    <React.Fragment>
      {/* <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={hasError}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        <SnackbarContent
          className={classes.snackBar}
          aria-describedby="error-snackbar"
          TrasitionComponent={
            <Slide direction="left"/>
          }
          message={
            <span id="error-snackbar" className={classes.snackBarMessage}>
              <WarningIcon className={classes.snackBarIcon} />
              {errorMsg}
            </span>
          }
          action={[
            <IconButton key="close" aria-label="close" color="inherit" onClick={handleSnackbarClose}>
              <CloseIcon className={classes.snackBarIcon} />
            </IconButton>,
          ]}
        />
      </Snackbar> */}

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
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
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
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
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
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            id="percentageBreakEvenRate"
            label="Percentage Break Even Rate"
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
    </React.Fragment>

  );
}

export default withStyles(styles)(VariableRiskComponent)