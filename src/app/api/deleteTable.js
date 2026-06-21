import "dotenv/config";
import { execSync } from "child_process";

execSync("npx prisma db execute --stdin", {
  input: "DROP TABLE IF EXISTS guests;",
  stdio: ["pipe", "inherit", "inherit"],
});

console.log("guests table deleted successfully.");
