export async function findUser(username) {
  const users = await testrun();
  const user = await users.findOne({ username: username });
  if (!user) {
    throw {
      statusCode: 400,
      Message: "User does not Exist",
    };
  }
  return user;
}
