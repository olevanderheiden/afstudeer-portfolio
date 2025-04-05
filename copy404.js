import { copyFileSync } from "fs";

try {
  // Copy index.html to 404.html
  copyFileSync("dist/index.html", "dist/404.html");
  console.log("404.html created successfully.");
} catch (err) {
  console.error("Error creating 404.html:", err);
}
