import fs from "fs/promises";

async function fileHandles() {
  const fileref = await fs.open("test.txt", "r+");
  try {
    const data = await fileref.read({});
    console.log(data.buffer.toString("utf-8", 0, data.bytesRead));
  } finally {
    await fileref.close();
  }
}
fileHandles();
