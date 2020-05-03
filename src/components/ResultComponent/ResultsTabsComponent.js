import React from 'react'

import SwipeableViews from 'react-swipeable-views';

import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import MonthlyResultsComponent from './MonthlyResultsComponent/MonthlyResultsComponent'
import TradesResultsComponent from './TradesResultsComponent/TradesResultsComponent'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
          children
      )}
    </div>
  );
}

function ResultsTabsComponent(props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { tradeParameters } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Box mb={5}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="Inputs"
      >
        <Tab label="Monthly Returns" id="monthly-returns" aria-controls="monthly-returns-panel" />
        <Tab label="Table of Results" id="table-results" aria-controls="table-results-panel" />
        <Tab label="Graph" id="graph" aria-controls="graph-panel" />
      </Tabs>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MonthlyResultsComponent portfolio={tradeParameters.portfolioResults.monthlyPortfolio}/>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <TradesResultsComponent 
            portfolio={tradeParameters.portfolioResults.portfolio}
            trades={tradeParameters.trades}
          />
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}

export default ResultsTabsComponent