import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

interface Body {
  name: string;
}

export default defineEventHandler(async (event) => {
  const body: Body = await readBody(event);
  let user: User | null = null;

  if (body.name) {
    try {
      user = await prisma.user.create({
        data: {
          name: body.name,
        },
      });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  return {
    user: user,
  };
});
