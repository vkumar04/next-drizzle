import { sql } from "drizzle-orm";
import { text, serial, pgTable } from "drizzle-orm/pg-core";

export const messages = pgTable("messages", {
  id: serial("id").notNull().primaryKey(),
  message: text("message").notNull(),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
