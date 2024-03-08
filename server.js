import express from "express";
import AuthRouter from "./src/auth/auth.controller.js";
import UserRouter from "./src/users/users.controller.js"

const app = express();

app.use(express.json());
app.use("/auth", AuthRouter);
app.use("/users",UserRouter);

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
