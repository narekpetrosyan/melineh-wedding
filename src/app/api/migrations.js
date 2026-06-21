import { db } from "./database.js";

export const migrate = () => {
  db.serialize(() => {
   db.run(
    `
      CREATE TABLE IF NOT EXISTS guests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        count INTEGER NOT NULL,
        wish TEXT NULL
      );
    `,
    (err) => {
     if (err) {
      console.error(err);
     }
     console.log("guests table created successfully.");
    }
   );
  });
}


migrate();
