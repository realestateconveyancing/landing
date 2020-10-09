import React from 'react'

import BlankLayout from '../components/common/layout/blank-temp'
import SEO from '../components/common/seo'
import HomeComp from '../components/home'

const HomePage = () => (
  <>
    <SEO title="Real Estate Conveyncer" />
    <BlankLayout>
      <HomeComp />
    </BlankLayout>
  </>
)

export default HomePage
