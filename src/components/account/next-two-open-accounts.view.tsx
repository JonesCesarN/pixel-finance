import { FormatDistance, formatValue, IResultBalance } from "@/helpers"
import TextBase from "@/styles/TextBase"
import { styled } from "stitches.config"

interface Props {
  accounts: IResultBalance[]
}

export const NextTwoOpenAccountsView = ({ accounts }: Props) => {


  return (
    <Container>
      <TextBase as='h3' size={5} bold className="title">Proximas contas</TextBase>
      {accounts.map(account => (
        <Box key={account.id} className={account.balanceStatus}>
          <div className="header">
            <TextBase size={3}>{FormatDistance(account.dueDate)}</TextBase>
            <TextBase size={3} boldDark className='value'>{formatValue(account.value)}</TextBase>
          </div>
          <div className="main">
            <TextBase size={4} uppercase boldDark >{account.description}</TextBase>
          </div>
          <div>
            <TextBase size={4} uppercase bold >{account.balance}</TextBase>
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

  ['& .alert']: {
    backgroundColor: '$yellow3',
    border: '2px solid $yellow7',
    color: '$yellow11',
  },

  ['& .warning']: {
    backgroundColor: '$red3',
    border: '2px solid $red7',
    color: '$red11',
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