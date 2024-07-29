CREATE TABLE IF NOT EXISTS "boards_table" (
	"board_id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"user_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "status_table" (
	"status_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"board_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tasks_table" (
	"task_id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"status" uuid NOT NULL,
	"board_id" serial NOT NULL,
	"user_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_table" (
	"user_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "boards_table" ADD CONSTRAINT "boards_table_user_id_users_table_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "status_table" ADD CONSTRAINT "status_table_board_id_boards_table_board_id_fk" FOREIGN KEY ("board_id") REFERENCES "public"."boards_table"("board_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tasks_table" ADD CONSTRAINT "tasks_table_status_status_table_status_id_fk" FOREIGN KEY ("status") REFERENCES "public"."status_table"("status_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tasks_table" ADD CONSTRAINT "tasks_table_board_id_boards_table_board_id_fk" FOREIGN KEY ("board_id") REFERENCES "public"."boards_table"("board_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tasks_table" ADD CONSTRAINT "tasks_table_user_id_users_table_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
