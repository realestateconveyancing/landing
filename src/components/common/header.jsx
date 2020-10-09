import { Link } from 'gatsby'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Img from './image'

const StyledHeader = styled.header`
  margin: 1.45rem;

  & .logo-cont{
    width: 500px;
    margin: 0 auto !important;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Row type="flex" justify="center">
      <Col span={24}>

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
