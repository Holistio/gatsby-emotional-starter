import React from 'react'
import styled from 'react-emotion'

const GreetBox = styled('div')`
  box-shadow: 0px 0px 32px 4px rgba(220,130,130,0.55);
  padding: 2em;
  background-color: lightcoral;
`
const PinkHeader = styled('h1')`
  color: pink;
`
const BlueDescription = styled('p')`
  color: navy;
  margin: 0;
`

const IndexPage = () => (
  <GreetBox>
    <PinkHeader>Emotional hello!</PinkHeader>
    <BlueDescription>Please don't cry just yet.</BlueDescription>
  </GreetBox>
)

export default IndexPage