import React from 'react'
import { useSelector } from 'react-redux'

import ResultsComponent from './ResultsComponent'

function ResultsContainerComponent() {
  // Take state from redux store
  const tradeParameters = useSelector(state => state.tradeParameters);

  return (
    <React.Fragment>
      {!tradeParameters.isHidden && 
        <ResultsComponent 
          tradeParameters={tradeParameters}
        />
      }
    </React.Fragment>
  )
}

export default ResultsContainerComponent