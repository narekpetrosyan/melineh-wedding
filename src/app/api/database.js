import { db } from "@/db";
import { guests } from "@/db/schema";
import "dotenv/config";
import { asc, eq } from "drizzle-orm";

export async function getGuests() {
  return db.select().from(guests).orderBy(asc(guests.id));
}

export async function createGuest({ name, count, wish }) {
  const [created] = await db
    .insert(guests)
    .values({ name, count, wish })
    .returning();

  return created;
}

export async function deleteGuest(id) {
  return db.delete(guests).where(eq(guests.id, Number(id)));
}
