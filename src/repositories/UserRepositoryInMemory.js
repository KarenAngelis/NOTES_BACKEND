
class UserRepository {
    user = []

    async create({ name, email, password }) {
        const user = {
            id: Math.floor(Math.random() * 1000) + 1 ,
            name,
            email,
            password
        }

        this.user.push(user)

        return user
    }

    async findByEmail(email) {
        return this.user.find(user => user.email === email)
    }

    }

    module.exports = UserRepository;