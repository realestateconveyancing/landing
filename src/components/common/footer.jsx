/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FacebookFilled, TwitterSquareFilled, YoutubeFilled } from '@ant-design/icons'
import { Row, Col } from 'antd'
import { homeStyles } from '../../styles'

const Footer = () => (
  <footer style={homeStyles.footer}>
    <Row>
      <Col span={2} />
      <Col span={18} style={homeStyles.footerText}>
        ©
        {new Date().getFullYear()}
        , Built By
        <a href="https://www.morosoft.org" style={homeStyles.footerTextLink} target="_blank">Morosoft</a>
      </Col>
      <Col span={4}>
        <a href="www.facebook.com" style={homeStyles.footerTextLink} target="_blank">
          <FacebookFilled />
        </a>
        <a href="www.twitter.com" style={homeStyles.footerTextLink} target="_blank">
          <TwitterSquareFilled />
        </a>
        <a href="www.youtube.com" style={homeStyles.footerTextLink} target="_blank">
          <YoutubeFilled />
        </a>
      </Col>
      <Col span={2} />
    </Row>
  </footer>
)

export default Footer
