const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  console.log("hello get");
  res.send("hello users get");
});

usersRouter.get("/:id", (req, res) => {
  console.log(`get by params: ${JSON.stringify(req.params)}`);
  res.send(`hello users with params: ${req.params.id}`);
});

usersRouter.post("/", (req, res) => {
  console.log(`hello post, body is: ${JSON.stringify(req.body)}`);
  res.send("hello users post");
});

usersRouter.put("/:id", (req, res) => {
  console.log(
    `hello update with id: ${req.params.id}, body is: ${JSON.stringify(
      req.body,
    )}`,
  );
  res.send("hello users post");
});

usersRouter.delete("/:id", (req, res) => {
  console.log(`hello delete with id: ${req.params.id}`);
  res.send("hello users post");
});

module.exports = usersRouter;
