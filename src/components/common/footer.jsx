/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { InstagramFilled, LinkedinFilled } from '@ant-design/icons'
import { Row, Col } from 'antd'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 20px 0px;
  background-color: #071939;
  color: #fff;

  & .credits{
    color: #fff;
    margin-left: 10px;
    cursor: 'pointer';
    margin-right: 10px;
    font-weight: bold;
  }

  & .icon-cont .anticon{
    color: white;
    font-size: 36px;
    fontWeight: bold;
    textDecoration: none;
    cursor: pointer;
    marginRight: 10px;
  }
`

const Footer = () => (
  <StyledFooter>
    <Row>
      <Col span={2} />
      <Col span={18}>
        ©
        {new Date().getFullYear()}
        , Built By
        <a href="JavaScript:Void(0)" className="credits">Elwa Group Private Limited</a>
      </Col>
      <Col span={4}>
        <a href="https://instagram.com/realestateconveyance.com.au?igshid=izwpetuu8wj6" className="icon-cont" target="_blank">
          <InstagramFilled />
        </a>
        <a href="https://www.linkedin.com/company/realestateconveyance" className="icon-cont" target="_blank">
          <LinkedinFilled />
        </a>

      </Col>
      <Col span={2} />
    </Row>
  </StyledFooter>
)

export default Footer
