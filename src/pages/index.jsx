import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Button, Row, Col } from 'antd'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import { homeStyles } from '../styles'

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
      >
        <Layout>

          <Row style={homeStyles.contentRow}>
            <Col span={6} />
            <Col span={6} style={homeStyles.butnsWrap}>
              <Button type="primary" style={homeStyles.contentBtn}>Sell A House </Button>
            </Col>
            <Col span={6} style={homeStyles.butnsWrap}>
              <Button type="primary" style={homeStyles.contentBtn}>Sell A House </Button>
            </Col>
            <Col span={6} />
          </Row>

        </Layout>
      </BackgroundImage>
    </>
  )
}

export default IndexPage
