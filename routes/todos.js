import {Router} from "express"

const router = new Router();
const todos = [{
  id: 1,
  name: "swim",
  type: "sport",
  description: "swimming"
},
  {
    id: 2,
    name: "run",
    type: "sport",
    description: "running"
  }];

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



export default router;

