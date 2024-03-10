import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let user = null;

  if (body.id)
    user = await prisma.user.delete({
      where: {
        id: body.id,
      },
    });

  return user;
});
