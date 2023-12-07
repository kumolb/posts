const User = require("../../models/User/User");
class UserRepository {
    async saveUser(data) {
        const newUser = new User(data);
        newUser.id = newUser._id;
        let isPhoneExist = await this.userCount({ phone: newUser.phone });
        let isEmailExist = await this.userCount({ $and: [{ email: { $exists: true } }, { email: { $eq: newUser.email } }] });
        if (isPhoneExist || isEmailExist) {
            throw new Error(`${isPhoneExist ? "Phone" : "Email"} already exists`);
        }
        const savedUser = await newUser.save();
        return savedUser;
    }
    async getUser(query, option) {
        let limit = option.limit;
        let page = option.page;
        let user = await User.find(query).lean().skip(limit * (page - 1)).limit(limit);
        return user;
    }
    async getOneUser(query) {
        let user = await User.findOne(query).lean();
        return user;
    }
    async updatedUser(query, updatedObj) {
        const updatedUser = await User.updateOne({ ...query }, { ...updatedObj });
        return updatedUser;
    }
    async deletedUser(query) {
        const deletedUser = await User.findByIdAndDelete(query);
        return deletedUser;
    }

    async userCount(query) {
        return await User.countDocuments(query);
    }
}

module.exports = new UserRepository();