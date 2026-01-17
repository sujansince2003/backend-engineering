import express from "express";

const app = express();

function middleware(req, res, next) {
  console.log(" i am inside middleware");
  next();
}
app.use(middleware);
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(3000, () => {
  console.log("hello world");
});
