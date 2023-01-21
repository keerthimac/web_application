const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
// import { all } from "../routes/subContractorRoute";
//Database models import here

const prisma = new PrismaClient();

// @desc Get all subContractors
// @route GET /api/subContractors
// @access Private

const getPipeData = asyncHandler(async (req, res) => {
  //   res.status(200).json({ message: "Get all plumbing data" });

  const main = async function () {
    const allBrands = await prisma.plumPipeInfo.findMany({
      select: {
        id: true,
        PlumBrand: {
          select: {
            plumBrand: true,
          },
        },
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

const getFittingData = asyncHandler(async (req, res) => {
  //   res.status(200).json({ message: "Get all plumbing data" });

  const main = async function () {
    const allBrands = await prisma.plumFittingInfo.findMany({
      select: {
        id: true,
        PlumFitting: {
          select: {
            plumFitting: true,
          },
        },
        PlumBrand: {
          select: {
            plumBrand: true,
          },
        },
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

        PlumType: {
          select: {
            plumType: true,
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
};
