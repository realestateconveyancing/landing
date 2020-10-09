import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Img from './image'

const StyledHeader = styled.header`

  & .logo-cont{
    max-width: 500px;
    margin: 0 auto !important;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Row type="flex" justify="center">
      <Col xs={24} sm={12}>
        <div className="logo-cont">
          <Img imgName="logo-transparent.png" />
        </div>
      </Col>
    </Row>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
