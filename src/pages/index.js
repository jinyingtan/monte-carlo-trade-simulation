import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TabsComponent from "../components/TabsComponent/TabsComponent"

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

    <TabsComponent />
    
  </Layout>
)

export default IndexPage
