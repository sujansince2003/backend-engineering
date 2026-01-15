import fs from "fs/promises";

async function fileHandles() {
  const fileref = await fs.open("test.txt", 2);
}
