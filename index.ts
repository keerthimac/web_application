import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const subName = await prisma.sub_company.create({
    data: {
      sub_company_name: "nawarathna construction",
    },
  });
  console.log(subName);
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
