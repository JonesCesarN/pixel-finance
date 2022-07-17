import { Decimal } from "@prisma/client/runtime"

export const formatValue = (value: Decimal | string | number) => {
  return Number(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currency: 'BRL',
    style: 'currency',
  })
}