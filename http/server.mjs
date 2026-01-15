import http from "http";

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url == "/") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "this is home page",
      })
    );
  }

  if (url == "/about") {
    res.writeHead(400, { "Content-type": "text/plain" });
    res.end("this is about");
  }
});

server.listen(3000, () => {
  console.log("server is runnning");
});
