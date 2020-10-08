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
              <Col span={6} />
              <Col span={12}>
                <h1 style={homeStyles.heading1}>
                  Your Local Real estate Conveyncer Affordable Fixed Rates
                </h1>
              </Col>
              <Col span={6} />
            </Row>
            <Row>
              <Col span={6} />
              <Col span={6} style={homeStyles.sellingCol}>
                <h2 style={homeStyles.heading2}>
                  Selling You Place?
                </h2>
                {/* <Button type="primary" style={homeStyles.contentBtn}>
                  <p style={homeStyles.btnText}>
                    Need a contract for your scale
                  </p>
                </Button> */}
              </Col>
              <Col span={6} style={homeStyles.buyingCol}>
                <h2 style={homeStyles.heading2}>
                  Buying a Place?
                </h2>
                {/* <Button type="primary" style={homeStyles.contentBtn}>
                  <span style={homeStyles.btnText}>
                    Need to review a contract for purchase
                  </span>
                </Button> */}
              </Col>
              <Col span={6} />
            </Row>
            <Row>
              <Col span={24}>
                <p style={homeStyles.heading3}>
                  $450
                </p>
              </Col>
            </Row>
            {/* <Row>
              <Col span={24}>
                <p style={homeStyles.heading3}>
                  Plus any Government or authority searches
                </p>
              </Col>
            </Row> */}

          </Layout>
        </div>
      </BackgroundImage>
    </>
  )
}

export default IndexPage
