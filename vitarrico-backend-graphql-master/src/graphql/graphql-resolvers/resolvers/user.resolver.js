import User from "../../../model/User";

const userResolver = {
    users: async () => await User.find(),
    createUser: async ({ user }) => {
        if (!user){
            throw new Error('Fields requiered!');
        }
        try{
            const newUser = new User(user)
            return await newUser.save();
        }catch(error){
            console.log(error);
        }   
     },
    deleteUser: async ({ id }) => {
        await User.findByIdAndDelete(id);
        return 'User Delete';
    },
    updateUser: async ({ user, id}) =>{
        const newUpdateUser = await User.findByIdAndUpdate(id, {
            $set: user
        },{new: true})
        return newUpdateUser
    }
};

export default userResolver;