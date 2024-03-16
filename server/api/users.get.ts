import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    return await prisma.user.findMany();
  }
  catch (error) {
    console.error("Error fetching users:", error);
  }
});
