import express from "express"
import {users} from "./routes"
import {todos} from "./routes"
import bodyParser from "body-parser"
import cors from "cors"

const PORT = 3001;
const HOST = "localhost";
const app = express();

app.use("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(users);
app.use(todos);
app.get('*', (req, res) => res.send("Hello World!"));

app.listen(PORT, () => {
  console.log(`Server run on: http://${HOST}:${PORT}`);
});
