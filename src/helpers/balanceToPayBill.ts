import { Account, Cashier } from "@prisma/client"
import { formatValue } from "./formatValue"

export interface IResultBalance extends Account {
  balance: number | string
  balanceStatus: 'warning' | 'alert'
}

export const balanceToPayBill = (accounts: Account[], cashier: Cashier[]): IResultBalance[] => {

  const cashierValue = cashier[0].total

  const formatedAccounts = accounts.map((account, index) => {

    const resultBalance = index == 0
      ? Number(cashierValue) - Number(account.value)
      : Number(cashierValue) - (Number(account.value) + Number(accounts[0].value))

    const mountBalance: IResultBalance = {
      id: account.id,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
      value: account.value,
      status: account.status,
      description: account.description,
      parcel: account.parcel,
      dueDate: account.dueDate,
      balance: 'null',
      balanceStatus: 'warning'
    }

    if (resultBalance < 0) {
      mountBalance.balance = `Faltam ${formatValue(resultBalance * -1)}`
    } else {
      mountBalance.balance = `A conta já pode ser paga.`
      mountBalance.balanceStatus = 'alert'
    }

    return mountBalance

  })

  return formatedAccounts
}

