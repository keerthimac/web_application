const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
// import { all } from "../routes/subContractorRoute";
//Database models import here

const prisma = new PrismaClient();

// @desc Get all subContractors
// @route GET /api/subContractors
// @access Private

const getPlumData = asyncHandler(async (req, res) => {
  //   res.status(200).json({ message: "Get all plumbing data" });

  const main = async function () {
    const allBrands = await prisma.plumPipeInfo.findMany({
      select: {
        id: true,
        plumPipeLengthImperial: true,
        plumPipeLengthMetric: true,
        PlumBrand: true,
        plumGradeId: true,
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
  getPlumData,
};
