import {Router} from "express"

const router = new Router();
const todos = [];

router.get("/todos", (req, res) => {
  res.json(todos);
});

router.post("/todos", (req, res) => {
  todos.push(req.body);
  console.log(req.body);
  res.json({
    status: "created",
    data: todos
  })
});

router.delete("/todos/:id", (req, res) => {
  const index = todos.findIndex((todo) => todo.id == req.params.id);
  let response = {
    status: "not found",
    data: todos
  };
  if (index !== -1) {
    todos.splice(index, 1);
    response.status = "deleted";
  }
  res.json(response);
});

router.delete("/todos", (req, res) => {
  todos.splice(0, todos.length);
  res.json({
    status: "deleted",
    data: todos
  });
});


//check if item exists, like in "delete"
router.put("/todos", (req, res) => {
  if(!req.body.id) {
    return res.json({
      status: "error",
      message: "ID not found",
      data: todos
    })
  }
  const index = todos.findIndex((item) => item.id == req.body.id);
  console.log(req.body.id, todos);
  todos[index] = {
    ...todos[index],
    ...req.body
  };
  console.log(index);
  res.json({
    status: "updated",
    data: todos
  })
  }
);
export default router;

