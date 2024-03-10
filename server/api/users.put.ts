import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const id = body.id;
  const name = body.name;

  if (!(id && name))
    return createError({
      statusCode: 400,
      statusMessage: "Missing id and name",
    });

  let user;

  if (id && name)
    user = await prisma.user.update({
      where: {
        id: body.id,
      },
      data: {
        name: body.name,
      },
    });

  return user;
});
