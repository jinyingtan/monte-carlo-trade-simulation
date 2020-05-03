import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  table: {
    minWidth: 650,
  }
})

function TradesResultsComponent(props) {
  const { portfolio, trades, classes } = props;

  const convertWinLose = (index) => {
    if (index === 0) {
      return '';
    }

    switch (trades[index - 1]) {
      case 1:
        return 'W';
      case -1:
        return 'L';
      case 0:
        return 'BE';
      default:
        return '';
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="trades-results-table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Win/Lose</TableCell>
            <TableCell>Portfolio Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {portfolio.map((value, index, array) => (
            <TableRow key={index}>
              <TableCell>{index}</TableCell>
              <TableCell>{convertWinLose(index)}</TableCell>
              <TableCell>${value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default withStyles(styles)(TradesResultsComponent)