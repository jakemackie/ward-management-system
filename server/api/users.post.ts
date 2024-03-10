import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let user = null;

  if (body.name)
    await prisma.user
      .create({
        data: {
          name: "Test user",
        },
      })
      .then((response) => {
        user = response;
      });
  return {
    user: user,
  };
});
