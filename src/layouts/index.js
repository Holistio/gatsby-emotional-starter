import React from 'react'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children }) => {
  <div>
    <Helmet
      title="Emotional Gatsby Starter"
    />
    {children()}
  </div>
}

export default TemplateWrapper