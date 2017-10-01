import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

const Wrapper = styled('div')`
  display: flex;
  background-color: lightyellow;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet
      title="Emotional Gatsby Starter"
    />
    {children()}
  </Wrapper>
)

export default TemplateWrapper