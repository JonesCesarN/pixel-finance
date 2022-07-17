import Placeholder from "@/styles/Placeholder";
import { styled } from "stitches.config";

export const NextTwoOpenAccountsFallback = () => {


  return (
    <Container>
      <Placeholder size='6' />
      <Box>
        <div className="header">
          <Placeholder size='3' />
          <Placeholder size='2' />
        </div>
        <Placeholder size='3' />
        <Placeholder size='5' />
      </Box>
      <Box>
        <div className="header">
          <Placeholder size='3' />
          <Placeholder size='2' />
        </div>
        <Placeholder size='3' />
        <Placeholder size='5' />
      </Box>
    </Container>
  )
}



const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 340,
  padding: '$2',
  gap: '$2',
  backgroundColor: '$gray5',
  borderRadius: '$2',
})

const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '$2',
  borderRadius: '$2',
  gap: '$2',
  backgroundColor: '$gray7',


  [`& .header`]: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  }
})