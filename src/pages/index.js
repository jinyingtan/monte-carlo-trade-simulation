import React from "react"
import { Provider } from 'react-redux';

import Layout from "../components/layout"
import SEO from "../components/seo"
import TabsComponent from "../components/TabsComponent/TabsComponent"

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
    </Provider>
    
  </Layout>
)

export default IndexPage
