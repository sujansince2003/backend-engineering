import { readFile } from "fs/promises";

async function readfile() {
  const data = await readFile("../heloo.txt", "utf-8");
  console.log("sujan");
  console.log("this is col", data);
}

readfile();
