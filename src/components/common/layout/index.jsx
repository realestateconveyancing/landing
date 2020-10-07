import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseLayout from './base-layout'
import Header from '../header'
import Footer from '../footer'

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Content = styled.div`
  flex-grow: 1;
`
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <BaseLayout>
        <Container>
          <Content>
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
          </Content>
          <Footer />
        </Container>
      </BaseLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
