import express from "express";
import cors from "cors";
const app = express();
const port = 4377;
app.use(express.json());// ?
app.use(cors({ origin: "*" }));
app.get("/", (req, resp) => {
  const username = req.cookies;
  resp.status(200).send({ message: "", username });
  console.log(username);
});
app.listen(port, () => {
  console.log(`Server running on port http://localhost:4377`);
});
