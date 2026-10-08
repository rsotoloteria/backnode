const http = require("node:http");

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ status: "okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk" }));
    return;
  }

  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Hola desde Node.js en Docker!\n");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Servidor disponible en http://localhost:${port}`);
});
