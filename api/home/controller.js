const { Router } = require("express");
const { createReadStream } = require("fs");
const { join } = require("path");

const homeRouter = Router();

const items = [
  { value: "Hello express", date: new Date().toISOString() },
  { value: "Hello js", date: new Date().toISOString() },
  { value: "Hello css", date: new Date().toISOString() },
];

homeRouter.get("/", (req, res) => {
  let template = "";

  const $index = createReadStream(
    join(__dirname, "..", "..", "public", "views", "index.html"),
    { encoding: "utf-8" },
  );

  $index.on("data", (data) => {
    template += data;
  });

  $index.on("end", () => {
    const list = items
      .map((chunk) => `<li>${chunk.value} - ${chunk.date}</li>`)
      .join("\n");
    template = template.replace("{%list%}", list);
    res.send(template);
  });

  $index.on("error", (error) => {
    res.status(500);
    res.send("Internal server error");
  });

  // res.sendFile(join(__dirname, "..", "..", "public", "views", "index.html"));
});

homeRouter.get("/index.html", (req, res) => {
  res.redirect("/");
});

module.exports = homeRouter;
