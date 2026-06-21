import "dotenv/config";
import { defineConfig } from "prisma/config";

const databaseUrl = "file:./guests.db";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: databaseUrl,
  },
});
