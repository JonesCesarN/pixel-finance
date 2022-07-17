import { fetcher } from "@/lib/fetcher";
import { Prisma } from "@prisma/client";
import useSWR from "swr";
import { NextTwoOpenAccountsView } from "./next-two-open-accounts.view";

type IDataNextAccount = [
  Prisma.AccountGetPayload<{ include: { installment: true } }>
] & { ok: boolean; message: string };

export const NextTwoOpenAccountsContainer = () => {
  const { data: nextAccounts, error } = useSWR<IDataNextAccount>('/api/account/nextaccount', fetcher)

  if (!nextAccounts)
    return (
      <div>
        <p>houve um erro</p>
      </div>
    );

  return (
    <>
      <NextTwoOpenAccountsView
        nextAccounts={nextAccounts}
      />
    </>
  )
}
