import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const cashierInit: Prisma.CashierCreateInput = {
  total: new Prisma.Decimal(110),
  records: {
    create: [
      {
        reason: 'luz',
        type: 'OUTPUT',
        value: new Prisma.Decimal(90),
      },
      {
        reason: 'fechamento',
        type: 'ENTRANCE',
        value: new Prisma.Decimal(200),
      }
    ]
  }
}

const accountsInit: Prisma.AccountCreateInput[] = [
  {
    description: 'luz',
    parcel: false,
    status: 'OPEN',
    value: new Prisma.Decimal(150),
    dueDate: '2022-07-15'
  },
  {
    description: 'agua',
    parcel: false,
    status: 'OPEN',
    value: new Prisma.Decimal(80),
    dueDate: '2022-07-20'
  },
  {
    description: 'televisao',
    parcel: true,
    status: 'OPEN',
    value: new Prisma.Decimal(250),
    dueDate: '2022-07-10',
    installment: {
      create: [
        { status: 'OPEN', date: '2022-07-10' },
        { status: 'OPEN', date: '2022-08-10' },
        { status: 'OPEN', date: '2022-09-10' },
        { status: 'OPEN', date: '2022-10-10' },
        { status: 'OPEN', date: '2022-11-10' },
        { status: 'OPEN', date: '2022-12-10' },
      ]
    }
  },
]


async function main() {
  console.log(` > Start seeding....`)

  await prisma.cashier.create({ data: cashierInit })
  console.log(` > Cashier created`)

  console.log(` > Accounts loop init`)
  for (const account_ of accountsInit) {
    const account = await prisma.account.create({
      data: account_
    })

    console.log(`     > Created account with id ${account.id}`)
  }
  console.log(` > Accounts loop finished`)


  console.log(` > Seeding finished.`)
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })