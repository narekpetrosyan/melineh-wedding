import "dotenv/config";
import path from "path";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../generated/prisma/client";

const globalForPrisma = globalThis;

function createPrismaClient() {
  const dbPath = path.join(process.cwd(), "guests.db");
  const adapter = new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL ?? `file:${dbPath}`,
  });

  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export async function getGuests() {
  return prisma.guest.findMany({
    orderBy: { id: "asc" },
  });
}

export async function createGuest({ name, count, wish }) {
  return prisma.guest.create({
    data: { name, count, wish },
  });
}

export async function deleteGuest(id) {
  return prisma.guest.delete({
    where: { id: Number(id) },
  });
}
