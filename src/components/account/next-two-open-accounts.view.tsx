import TextBase from "@/styles/TextBase"
import { Format } from "@/utils/formatDate"
import { formatValue } from "@/utils/formatValue"
import { Account } from "@prisma/client"
import { styled } from "stitches.config"

interface Props {
  nextAccounts: Account[]
}

export const NextTwoOpenAccountsView = ({ nextAccounts }: Props) => {

  return (
    <Container>
      <TextBase as='h3' size={5} bold className="title">Proximas contas</TextBase>
      {nextAccounts.map(account => (
        <Box key={account.id} className={account.status}>
          <div className="header">
            <TextBase size={3}>{Format(account.dueDate, 'dd/MM/yyyy')}</TextBase>
            <TextBase size={3} bold alert>{formatValue(account.value)}</TextBase>
          </div>
          <div className="main">
            <TextBase size={4} uppercase bold alert>{account.description}</TextBase>
          </div>
          <div>
            <TextBase size={4} bold>{formatValue(account.value)}</TextBase>
          </div>
        </Box>
      ))}
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

  ['& .OPEN']: {
    backgroundColor: '$yellow4',
    border: '2px solid $yellow7',
    color: '$yellow11',
  },

  ['& .title']: {
    color: '$gray12'
  }
})

const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '$1',
  borderRadius: '$2',
  gap: '$1',

  [`& .header`]: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  }
})