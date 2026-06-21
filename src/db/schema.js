import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const guests = sqliteTable("guests", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  count: integer("count").notNull(),
  wish: text("wish"),
});
