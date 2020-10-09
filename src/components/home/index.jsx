import React from 'react'

import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import {
  Button, Row, Col,
} from 'antd'

import Header from '../common/header'
import Footer from '../common/footer'

const HeroContainer = styled.div`
  background: rgba(11, 32, 71, 0.5);
  @media(min-width: 500px) {
    height: calc(100vh - 77px);
  }
`

const StyledHome = styled.div`
  & .col-container{
    display: flex; 
    flex-direction: column !important; 
    align-items: center !important; 
    justify-content: center !important;
    margin: 20px;
  }

  & .col-container .tagline{
    color: white;
    text-align: center;
    font-size: 24px;
  }

  & .heading-row{
    min-height: 250px;
    text-align: center;
    color: #fff;
  }

  & .main-heading{
    color: white;
    font-size: 36px;
    line-height: 60px;
    margin-bottom: 0px;
    text-align: center;
  }

  & .heading-tagline{
    color: #fff;
    font-style: italic;
    margin-top: 0;
  }

  & .pricing-row{
    padding: 40px;
    margin: 40px;
  }

  & .pricing-row p{
    font-weight: bold;
    color: #0ea800;
    font-size: 24px;
    text-align: center;
    font-weight: bold;
  }

  & .pricing-row span{
    font-size: 12px;
    font-style: italic;
    color: #fff;
  }


`

const StyledButton = styled(Button)`
  font-size: 24px;
  line-height: 24px;
  background-color: #0ea800;
  text-align: 'center';

  @media(max-width: 500px) {
    font-size: 18px;
  }
`

const StyledBackgroundImage = styled(BackgroundImage)`
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
`

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "bg-new.jpg" }) {
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
      <StyledBackgroundImage
        Tag="section"
        className="hero-bg"
        fluid={imageData}
        backgroundColor="#040e18"
      >
        <HeroContainer>

          <Header />
          <StyledHome>
            <Row className="heading-row" align="middle">
              <Col span={24}>
                <h1 className="main-heading">
                  Your Local Real Estate Conveyancer
                </h1>
                <h3 className="heading-tagline">Affordable Fixed Rates</h3>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col
                sm={6}
                className="col-container"
              >
                <h2 className="tagline">
                  Selling Your Place?
                </h2>
                <StyledButton type="primary" href="https://reception676431.typeform.com/to/KN9jKQeB" size="large">
                  Need a contract for your scale
                </StyledButton>
              </Col>
              <Col sm={6} className="col-container">
                <h2 className="tagline">
                  Buying a Place?
                </h2>
                <StyledButton href="https://reception676431.typeform.com/to/RL6Z7cjj" type="primary" size="large">
                  Need to review a contract for purchase
                </StyledButton>
              </Col>
            </Row>
            <Row className="pricing-row">
              <Col span={24}>
                <p>
                  $500
                  {' '}
                  <span>*plus any Government or authority searches</span>
                </p>
              </Col>
            </Row>
          </StyledHome>

        </HeroContainer>

      </StyledBackgroundImage>
      <Footer />
    </>
  )
}
export default Home
