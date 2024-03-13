import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

interface Body {
  id: number;
}

export default defineEventHandler(async (event) => {
  const body: Body = await readBody(event);
  let user: User | null = null;
  let error: any = null;

  if (body.id) {
    try {
      user = await prisma.user.delete({
        where: {
          id: body.id,
        },
      });
    } catch (e) {
      error = e;
    }
  }

  if (error) {
    return createError({ statusCode: 500, statusMessage: "Server Error" });
  }

  return user;
});
