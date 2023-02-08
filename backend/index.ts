import { PrismaClient } from "@prisma/client";
// const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// const main = async function () {
//   const allBrands = await prisma.plum_fitting_info.findMany({
//     where: {
//       plum_type: {
//         plum_type: "Pressure fittings",
//       },
//     },

//     select: {
//       plum_fitting: {
//         select: {
//           plum_fitting: true,
//         },
//       },
//       plum_size: {
//         select: {
//           plum_size_metric: true,
//         },
//       },
//     },
//   });
//   console.log(allBrands);
// };

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

const main = async function () {
  const allBrands = await prisma.plum_fitting_price.findMany({
    where: {
      brand: {
        brand: {
          contains: "slon",
        },
      },
      plum_fitting_info: {
        plum_type: {
          plum_type: {
            contains: "Pressure fittings",
          },
        },
      },
    },
    include: {
      plum_fitting_info: true,
    },
  });

  console.log(allBrands);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
