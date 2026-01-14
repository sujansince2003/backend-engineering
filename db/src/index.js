import express from "express";
const app = express();

app.get("/", async (req, res) => {
  res.json({
    msg: "this is runnning well",
  });
});

app.listen(3000, () => {
  console.log("server running");
});
