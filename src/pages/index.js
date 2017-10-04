import React from 'react'
import styled from 'react-emotion'

const GreetBox = styled('div')`
  box-shadow: 0px 0px 16px 4px ${props => props.theme.colors.concrete_half};
  padding: 2em;
  margin: 1em;
  background-color: ${props => props.theme.colors.concrete};
`
const Header = styled('h1')`
  color: ${props => props.theme.colors.blue};
  font-size: 2em;
`
const Tagline = styled('h3')`
  color: ${props => props.theme.colors.blue};
  font-weight: 300;
`

const Paragraph = styled('p')`
  color: ${props => props.theme.colors.mine_shaft};
  margin: 0;
`

const Link = styled('a')`
  color: ${props => props.theme.colors.spring_green};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.blue};
  }
`
const IndexPage = () => (
  <GreetBox>
    <Header>emotional hello!</Header>
    <Tagline>(please don't cry just yet)</Tagline>
    <Paragraph>Learn more about <Link href="//www.gatsbyjs.org/">Gatsby</Link>, <Link href="//emotion.sh/">emotion</Link> or <Link href="//holist.io">our company</Link>.</Paragraph>
  </GreetBox>
)

export default IndexPage