import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import {
  Button, Row, Col,
} from 'antd'

import styled from 'styled-components'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import { homeStyles } from '../styles'

const StyledHome = styled.div`
  & .col-container{
    display: flex; 
    flex-direction: column !important; 
    align-items: center !important; 
    justify-content: center !important;
  }

  & .heading-row{
    min-height: 250px;
  }
`

const StyledButton = styled(Button)`
  font-size: 24px;
  line-height: 24px;
  background-color: #0ea800;
  text-align: 'center';
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "bg-img.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.desktop.childImageSharp.fluid
  return (
    <>
      <SEO title="Home" />
      <BackgroundImage
        Tag="section"
        className="hero-bg"
        fluid={imageData}
        backgroundColor="#040e18"
        style={homeStyles.bgImage}
      >
        <div style={homeStyles.content}>
          <Layout>
            <StyledHome>
              <Row className="heading-row" align="middle">
                <Col span={24}>
                  <h1 style={homeStyles.heading1}>
                    Your Local Real estate Conveyncer Affordable Fixed Rates
                  </h1>
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col
                  span={6}
                  className="col-container"
                >
                  <h2 style={homeStyles.heading2}>
                    Selling You Place?
                  </h2>
                  <StyledButton type="primary" href="https://google.com" size="large">
                    Need a contract for your scale
                  </StyledButton>
                </Col>
                <Col span={6} className="col-container">
                  <h2 style={homeStyles.heading2}>
                    Buying a Place?
                  </h2>
                  <StyledButton href="https://google.com" type="primary" size="large">
                    Need to review a contract for purchase
                  </StyledButton>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <p style={homeStyles.heading3}>
                    Plus any Government or authority searches
                  </p>
                </Col>
              </Row>
            </StyledHome>

          </Layout>
        </div>
      </BackgroundImage>
    </>
  )
}

export default IndexPage
