import { balanceToPayBill } from "@/helpers";
import { fetcher } from "@/lib/fetcher";
import { Prisma } from "@prisma/client";
import useSWR from "swr";
import { NextTwoOpenAccountsFallback } from "./next-two-open-account.fallback";
import { NextTwoOpenAccountsView } from "./next-two-open-accounts.view";

type IDataNextAccount = [
  Prisma.AccountGetPayload<{ include: { installment: true } }>
] & { ok: boolean; message: string };


export const NextTwoOpenAccountsContainer = () => {
  const { data: accountsData, error: nextError } = useSWR<IDataNextAccount>('/api/account/nextaccount', fetcher)
  const { data: cashierData, error: cashierError } = useSWR('/api/cashier', fetcher)

  if (nextError || cashierError) return <p>houve um erro</p>

  if (!accountsData || !cashierData) return <NextTwoOpenAccountsFallback />

  if (accountsData.ok === false) return <p>Nenhum dado encontrado!</p>;

  const accounts = balanceToPayBill(accountsData, cashierData)

  return (
    <>
      <NextTwoOpenAccountsView
        accounts={accounts}
      // cashierData={cashierData}
      />
    </>
  )
}
