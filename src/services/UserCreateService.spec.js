const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError");

describe("UserCreateService", () => {
 let userRepositoryInMemory = null;
 let userCreateService = null;

  beforeEach(() => {
    userRepository = new UserRepositoryInMemory();
    userCreateService = new UserCreateService(userRepository);
  });

  it("user should be create", async () => {
    const user = {
     name: "John",
     email: "john@example.com",
     password: "XXXXXXXXXXX" 
    }
  
    const userCreated = await userCreateService.execute(user);
  
    console.log(userCreated);
  
    expect(userCreated).toHaveProperty("id");
  });

  it("user not should be create with exists email", async () => {
    const user1 = {
      name: "John",
      email: "john@example.com",
      password: "XXXXXXXXXXX"
     };

     const user2 = {
      name: "John",
      email: "john@example.com",
      password: "XXXXXXXXXXX"
     };
    
     
      await userCreateService.execute(user1);
      await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso."));

  });
  });