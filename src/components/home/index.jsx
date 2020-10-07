import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const HeroContainer = styled(Container)`
  background: rgba(0,0,0,0.7); 
`

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "person-writing.jpg" }) {
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
    <BackgroundImage
      Tag="section"
      className="hero-bg"
      fluid={imageData}
      backgroundColor="#040e18"
    >
      {/* <HeroContainer fluid>
        <Row>
          <Col className="text-light">
            <h2>gatsby-background-image</h2>
            <h3>Hero Section</h3>
          </Col>
        </Row>
      </HeroContainer> */}
    </BackgroundImage>
  )
}
export default Home
