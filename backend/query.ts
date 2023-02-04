const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // const data = await prisma.plum_fitting_price.findMany({
  //   select: {
  //     plum_fitting_price: {
  //       select: {
  //         id: true,
  //         plum_fitting_price: true,
  //       },
  //     },
  //   },
  // });
  // console.log(data);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
