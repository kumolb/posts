const User = require("../../models/User/User");
export class UserRepository {
    async saveUser(data) {
        const newUser = new User(data);
        const savedUser = await newUser.save();
        return savedUser;
    }
    async getUser(query) {
        let user = await User.find(query).lean();
        return user;
    }
    async updatedUser(query, updatedObj) {
        const updatedUser = await User.update({ ...query }, { ...updatedObj });
        return updatedUser;
    }
    async deletedUser(query) {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        return deletedUser;
    }
}