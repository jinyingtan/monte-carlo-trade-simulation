import React from "react"
import { Provider } from 'react-redux';

import Layout from "../components/layout"
import SEO from "../components/seo"
import TabsComponent from "../components/TabsComponent/TabsComponent"
import ResultsContainerComponent from "../components/ResultComponent/ResultsContainerComponent"

import store from '../store';

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home" 
      keywords={[
        "monte carlo",
        "trade simulation",
        "forex",
        "fx",
        "trading",
      ]}  
    />

    <Provider store={store}>
      <TabsComponent />
      <ResultsContainerComponent />
    </Provider>
    
  </Layout>
)

export default IndexPage
