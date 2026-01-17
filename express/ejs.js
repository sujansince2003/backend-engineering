import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
app.set("view engine", "ejs");
const filename = fileURLToPath(import.meta.url);
const dir = dirname(filename);
app.set("views", path.join(dir, "views"));
app.get("/", (req, res) => {
  res.render("home", req.query);
});

app.listen(3001, () => {
  console.log("running in 3001");
});
