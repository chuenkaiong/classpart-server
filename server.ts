import express from "express";
import { generatePIN } from "./util";

const app = express();
const PORT = process.env.PORT || 8080;

for (let i=0; i<10; i++) {
  console.log(generatePIN())
}

app.get("/", (req, res) => res.send("Hello World!"))

app.listen(PORT, () => console.log(`Listening on ${PORT}`))