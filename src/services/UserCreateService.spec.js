const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");

it("user should be create", async () => {
  const user = {
   name: "John",
   email: "john@example.com",
   password: "XXXXXXXXXXX" 
  }

  const userRepositoryInMemory = new UserRepositoryInMemory();
  const userCreateService = new UserCreateService(userRepositoryInMemory);
  const userCreated = await userCreateService.execute(user);

  console.log(userCreated);

  expect(userCreated).toHaveProperty("id");

  });