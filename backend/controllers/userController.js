import User from '../models/UserModel.js';

export const userController = {
    async list(req, res) {
        try {
            const users = await User.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async add(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async update(req, res) {
        try {
            const email = req.body;
            const id = req.params.id;
            const user = await User.findOne({where: {id}});

            if(!user){
                return res.status(400).json('User not found!');
            }

            user.email = email;

            await user.save();
            res.status(201).json('User updated with sucess!');
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async delete(req,res) {
        try {
            const id = req.params.id;
            const user = await User.destroy({where: {id}});

            if(!user){
                return res.status(400).json('User not found!');
            }

            res.status(200).json('User deleted with sucess!');
        } catch (error) {
            res.status(400).send(error);
        }
    }
}