import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { HomeFilled } from '@ant-design/icons'
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
        style={homeStyles.bgImage}
      >
        <div style={homeStyles.content}>
          <Layout>
            <Row style={homeStyles.contentRow}>
              <Col span={24}>
                <h1 style={homeStyles.heading1}>Find your local Real Estate Agent</h1>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <p style={homeStyles.heading2}>Choose from over 45,000 nationwide</p>
              </Col>
            </Row>
            <Row>
              <Col span={6} />
              <Col span={6} style={homeStyles.butnsWrap}>
                <Button type="primary" style={homeStyles.contentBtn}>Buy A House </Button>
              </Col>
              <Col span={6} style={homeStyles.butnsWrap}>
                <Button type="primary" style={homeStyles.contentBtn}>Sell A House </Button>
              </Col>
              <Col span={6} />
            </Row>
            <Row>
              <Col span={24}>
                <p style={homeStyles.heading3}>
                  <HomeFilled style={homeStyles.homeIcon} />
                  Looking to sell? Get a free appraisal
                </p>
              </Col>
            </Row>

          </Layout>
        </div>
      </BackgroundImage>
    </>
  )
}

export default IndexPage
