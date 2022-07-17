import Placeholder from "@/styles/Placeholder";
import { styled } from "stitches.config";

export const CashierFallback = () => {
  return (
    <Container>
      <Placeholder rounded size={6} />
      <Placeholder size={10} myHeigth={5} />
      <Box>
        <div className="header">
          <Placeholder rounded size={10} myHeigth={5} />
          <Placeholder size={10} myHeigth={5} />
        </div>
        <Placeholder rounded size={10} myHeigth={5} />
        <Placeholder rounded size={10} myHeigth={5} />
        <Placeholder rounded size={10} myHeigth={5} />
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
  border: '1px solid $gray8',


  [`& .header`]: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    gap: 5
  }
})