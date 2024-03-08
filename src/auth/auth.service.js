import { testrun } from "../loaders/db.js";
import bcrypt from "bcrypt";
import { generateToken } from "../middlewares/jwt.js";

export async function handleSignUp(username, password) {
  const users = await testrun();
  const user = await users.findOne({ username: username });
  if (user) {
    throw {
      statusCode: 400,
      Message: "User Already Exists",
    };
  }
  const hash = await bcrypt.hash(password, 10);
  await users.insertOne({ username: username, password: hash });
}

export async function handleLogin(username, password) {
  const users = await testrun();
  const user = await users.findOne({ username: username });
  if (!user) {
    throw {
      statusCode: 400,
      Message: "User not Signed Up",
    };
  }
  const res = await bcrypt.compare(password, user.password);
  if (!res) {
    throw {
      statusCode: 401,
      Message: "Unauthorized Access",
    };
  }
  return generateToken(username);
}
