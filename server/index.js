import express from "express";
import cors from "cors";
const app = express();
const port = 4377;
app.use(express.json());
app.use(cors({ origin: "*" }));
app.get("/", (req, resp) => {
  resp.status(200).send({ message: "", lessons });
});
app.listen(port, () => {
  console.log("Server running on port http://localhost:4377");
});

var lessons = [
  {
    topic:'Module 1',
    id:1,
    description:'html',
    outcomes:['','','']
  },
  {
    topic:'Module 2',
    id:2,
    description:'html 5 and css',
    outcomes:['','','']
  },
  {
    topic:'Module 3',
    id:3,
    description:'javascript',
    outcomes:['','','']
  },
  {
    topic:'Module 4',
    id:4,
    description:'DOM Manipulatio',
    outcomes:['','','']
  },
  {
    topic:'Module 5',
    id:5,
    description:'Communicate to remmote server',
    outcomes:['','','']
  }
]