import React from 'react'
import PropTypes from 'prop-types'
import BaseLayout from './base-layout'

const BlankTemplate = ({ children }) => (
  <>
    <BaseLayout>
      {children}
    </BaseLayout>
  </>
)

BlankTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlankTemplate
