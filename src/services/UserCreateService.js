const { hash } = require('bcryptjs');
const AppError = require('../utils/AppError')



class UserCreateService {
    constructor(UserRepository) {
    this.userRepository = UserRepository;
    }


    async execute({ name, email, password }) {
        const checkUserExists = await this.userRepository.findByEmail(email);
    
        if (checkUserExists){
          throw new AppError("Este e-mail já está em uso.")
        }
    
        const hashedPassword = await hash(password, 8)
    
        const userCreated = await this.userRepository.create({ name, email, password: hashedPassword })

        return userCreated;

    }

}

module.exports = UserCreateService;