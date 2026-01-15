import { readFile, writeFile } from "fs/promises";

async function readfile() {
  const data = await readFile("../heloo.txt", "utf-8");
  console.log("sujan");
  console.log("this is col", data);
}

// readfile();

async function writetofile() {
  try {
    const data = await writeFile("test", "i am testing write", "utf-8");
    console.log("file created and write successully");

    const jsondata = {
      name: "sujan",
      age: 24,
    };

    const writejsondata = await writeFile(
      "jsond.txt",
      JSON.stringify(jsondata, null, 2)
    );
    console.log("write to json");
  } catch (error) {
    console.log("error when writing to file");
  }
}

writetofile();
