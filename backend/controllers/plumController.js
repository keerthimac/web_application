const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
// import { all } from "../routes/subContractorRoute";
//Database models import here

const prisma = new PrismaClient();

// @desc Get all pipe data
// @route GET /api/plumbing/pipe
// @access Private

const getPipeData = asyncHandler(async (req, res) => {
  //   res.status(200).json({ message: "Get all plumbing data" });

  const main = async function () {
    const allBrands = await prisma.plumPipeInfo.findMany({
      select: {
        id: true,
        PlumGrade: {
          select: {
            plumGrade: true,
            plumStandard: true,
          },
        },
        PlumSize: {
          select: {
            plumSizeImperial: true,
          },
        },
        PlumPipeEndType: {
          select: {
            plumPipeEndType: true,
          },
        },
        PlumType: {
          select: {
            plumType: true,
          },
        },
        plumPipeLengthImperial: true,
        plumPipeLengthMetric: true,
      },
    });
    // console.log(allBrands);
    res.status(200).json(allBrands);
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
});

// @desc Get all fitting_data
// @route GET /api/plumbing/fitting
// @access Private

const getFittingData = asyncHandler(async (req, res) => {
  //   res.status(200).json({ message: "Get all plumbing data" });
  const { type, brand } = req.params;
  // console.log(type, brand);

  const main = async function () {
    const allBrands = await prisma.plum_fitting_price.findMany({
      where: {
        brand: {
          brand: {
            contains: `${brand}`,
          },
        },
        plum_fitting_info: {
          plum_type: {
            plum_type: {
              contains: `${type}`,
            },
          },
        },
      },
      select: {
        id: true,
        brand: {
          select: {
            brand: true,
          },
        },
        plum_fitting_price: true,
        plum_fitting_info: {
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
            plum_type: {
              select: {
                plum_type: true,
              },
            },
          },
        },
      },
    });
    // console.log(allBrands);
    res.status(200).json(allBrands);
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
});

// @desc Get all fitting pressure fittings
// @route GET /api/plumbing/fitting
// @access Private

const getPressureFittingInfo = asyncHandler(async (req, res) => {
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
      select: {
        brand: {
          select: {
            brand: true,
          },
        },
        plum_fitting_price: true,
        plum_fitting_info: {
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
            plum_type: {
              select: {
                plum_type: true,
              },
            },
          },
        },
      },
    });
    // console.log(allBrands);
    res.status(200).json(allBrands);
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
});

module.exports = {
  getPipeData,
  getFittingData,
  getPressureFittingInfo,
};
