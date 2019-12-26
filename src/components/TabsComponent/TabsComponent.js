import React from 'react'

import SwipeableViews from 'react-swipeable-views';

import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import VariableRiskContainerComponent from './VariableRiskComponent/VariableRiskContainerComponent';
import FixedRiskContainerCompnent from './FixedRiskComponent/FixedRiskContainerComponent';

function TabsComponent() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="lg" disableGutters>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="Inputs"
        >
          <Tab label="Variable Risk" id="variable-risk" aria-controls="variable-risk-panel" />
          <Tab label="Fixed Risk" id="fixed-risk-panel" aria-controls="fixed-risk-panel" />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <VariableRiskContainerComponent value={value} index={0} dir={theme.direction} />
          <FixedRiskContainerCompnent value={value} index={1} dir={theme.direction} />
        </SwipeableViews>
      </Container>
    </React.Fragment>
  )
}


export default TabsComponent