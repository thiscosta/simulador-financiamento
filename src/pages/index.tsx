import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../containers/Home"
import FinancingContextComponent from "../context/Financing"

const IndexPage = () => (
  <FinancingContextComponent>
    <Layout>
      <Seo title="Home" />
      <Home />
    </Layout>
  </FinancingContextComponent>
)

export default IndexPage;;
