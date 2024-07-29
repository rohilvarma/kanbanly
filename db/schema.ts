import { pgTable, serial, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  user_id: uuid("user_id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
});

export const boardsTable = pgTable("boards_table", {
  board_id: serial("board_id").primaryKey(),
  name: text("name").notNull(),
  user_id: uuid("user_id")
    .notNull()
    .references(() => usersTable.user_id),
});

export const tasksTable = pgTable("tasks_table", {
  task_id: serial("task_id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status_id: uuid("status")
    .notNull()
    .references(() => statusTable.status_id),
  board_id: serial("board_id")
    .notNull()
    .references(() => boardsTable.board_id),
  user_id: uuid("user_id")
    .notNull()
    .references(() => usersTable.user_id),
  created_at: timestamp("created_at").notNull().defaultNow(),
});

export const statusTable = pgTable("status_table", {
  status_id: uuid("status_id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  board_id: serial("board_id")
    .notNull()
    .references(() => boardsTable.board_id),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertBoard = typeof boardsTable.$inferInsert;
export type SelectBoard = typeof boardsTable.$inferSelect;

export type InsertTask = typeof tasksTable.$inferInsert;
export type SelectTask = typeof tasksTable.$inferSelect;

export type InsertStatus = typeof statusTable.$inferInsert;
export type SelectStatus = typeof statusTable.$inferSelect;
