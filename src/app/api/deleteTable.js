import { db } from "./database.js";

export const deleteTable = () => {
  db.serialize(() => {
   db.run(
    `
      DROP TABLE IF EXISTS guests;
    `,
    (err) => {
     if (err) {
      console.error(err.message);
     }
     console.log("guests table deleted successfully.");
    }
   );
  });
}

deleteTable();
