import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

interface Body {
  id: number;
  name: string;
}

export default defineEventHandler(async (event) => {
  const body: Body = await readBody(event);
  let user: User | null = null;
  const id = body.id;
  const name = body.name;

  if (!(id && name)) {
    return createError({
      statusCode: 400,
      statusMessage: "Missing id and name",
    });
  }

  if (id && name) {
    user = await prisma.user.update({
      where: {
        id: body.id,
      },
      data: {
        name: body.name,
      },
    });
    
    return user;
  }
});
