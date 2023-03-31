'use strinct';
const User = require('../schemas/user.schema');

class UserController {

    async all(req, res, next){
        const { limit = 5, offset = 0 } = req.query;
        const query = { deleted : false };

        try{
            const [total, users] = await Promise.all([
                User.countDocuments(query),
                User.find(query)
                           .skip(+offset)
                           .limit(+limit)
            ]);
    
            return res.json({
                total,
                users
            });
        }catch (error) {
			return res.status(400).json({
				msg : "Error getting the users"
			});
		}
    }

    async getById(req, res, next){
		const { id } = req.params;

		try{
			const user = await User.findById(id);
			return res.json(user);

		}catch (error) {
			return res.status(400).json({
				msg : "Error getting the user"
			});
		}

	}

    async create(req, res, next){
        const data = req.body;

        try{
            const user = new User(data);
            await user.save();

            return res.status(201).json(user);
        }catch (error) {
			return res.status(400).json({
				msg : "Error creating the user"
			});
		}
    }

    async update(req, res, next){
		const { id } = req.params;
		const data = req.body;

		try {
			const user = await User.findByIdAndUpdate(id, data, { new: true });
			
			return res.json(user);
		} catch (error) {
			return res.status(400).json({
				msg : "Error updating the user"
			});
		}
	}

	async delete(req, res, next){
		const { id } = req.params;

		try{
			const user = await User.findByIdAndUpdate(id, { deleted : true }, { new : true });
			return res.json(user);
		}catch (error) {
			return res.status(400).json({
				msg : "Error deleting the user"
			});
		}
	}
}

module.exports = new UserController();