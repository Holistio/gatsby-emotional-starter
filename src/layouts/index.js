import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { ThemeProvider, withTheme } from 'emotion-theming'
import theme from '../utils/theme'

class TemplateWrapper extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Helmet
            title="Emotional Gatsby Starter"
          />
          {this.props.children()}
        </Wrapper>
      </ThemeProvider>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.blue};
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export default TemplateWrapper