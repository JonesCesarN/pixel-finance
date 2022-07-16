import type { NextPage } from 'next'
import { styled } from '../../stitches.config'

const Home: NextPage = () => {


  return (
    <Box>
      Hello World!!
      <Button >add</Button>
    </Box>
  )
}

export default Home

const Button = styled('button', {
  px: 15,
  py: 5
})

const Box = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20

})
