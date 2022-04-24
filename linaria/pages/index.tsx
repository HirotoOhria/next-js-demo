import { NextPage } from 'next'
import { styled } from "@linaria/react";

const Home: NextPage = () => {
  return (
    <Div>
      Hello World
    </Div>
  )
}

export default Home

const Div = styled.div`
  font-size: 34px;
`