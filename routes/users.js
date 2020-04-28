import {Router} from "express"

const router = new Router();
const users = [{
  id: "man",
  name: "John",
  surname: "Smith"
}];

router.get("/users", (req, res) => {
  res.json(users);
});

router.post("/users", (req, res) => {
  users.push(req.body);
  res.json({
    status: "created"
  })
});



export default router;
