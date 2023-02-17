import { PrismaClient } from "@prisma/client";

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

// const fittingList = async function () {
//   const allBrands = await prisma.plum_fitting_price.findMany({
//     where: {
//       brand: {
//         brand: {
//           contains: "slon",
//         },
//       },
//       plum_fitting_info: {
//         plum_type: {
//           plum_type: {
//             contains: "Pressure fittings",
//           },
//         },
//       },
//     },
//     select: {
//       brand: {
//         select: {
//           brand: true,
//         },
//       },
//       plum_fitting_price: true,
//       plum_fitting_info: {
//         select: {
//           id: true,
//           plum_fitting: {
//             select: {
//               plum_fitting: true,
//             },
//           },
//           plum_grade: {
//             select: {
//               plum_grade: true,
//             },
//           },
//           plum_size: {
//             select: {
//               plum_size_metric: true,
//             },
//           },
//           plum_type: {
//             select: {
//               plum_type: true,
//             },
//           },
//         },
//       },
//     },
//   });

//   console.log(allBrands);
// };

// fittingList()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// const main = async function () {
//   const allBrands = await prisma.plum_fitting_price.findMany({
//     where: {
//       brand: {
//         id: {
//           equals: parseInt("1"),
//         },
//       },
//       plum_fitting_info: {
//         plum_fitting_type: {
//           id: {
//             equals: parseInt("2"),
//           },
//         },
//       },
//     },
//     select: {
//       brand: {
//         select: {
//           brand: true,
//         },
//       },
//       plum_fitting_price: true,
//       plum_fitting_info: {
//         select: {
//           id: true,
//           plum_fitting: {
//             select: {
//               plum_fitting: true,
//             },
//           },
//           plum_grade: {
//             select: {
//               plum_grade: true,
//             },
//           },
//           plum_size: {
//             select: {
//               plum_size_metric: true,
//             },
//           },
//           plum_fitting_type: {
//             select: {
//               plum_fitting_type: true,
//             },
//           },
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
  const allBrands = await prisma.plum_fitting_info.findMany({
    where: {
      plum_fitting_type: {
        id: {
          equals: parseInt("1"),
        },
      },
    },
    select: {
      id: true,
      plum_fitting: {
        select: {
          plum_fitting: true,
        },
      },
      plum_grade: {
        select: {
          plum_grade: true,
        },
      },
      plum_size: {
        select: {
          plum_size_metric: true,
        },
      },
      plum_fitting_type: {
        select: {
          plum_fitting_type: true,
        },
      },
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
