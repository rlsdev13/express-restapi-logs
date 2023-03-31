'use strinct';
const Application = require('../schemas/aplications.schema');

class ApplicationController {

    async all(req, res, next){
        const { limit = 5, offset = 0 } = req.query;
        const query = { deleted : false };

        try{
            const [total, logs] = await Promise.all([
                Application.countDocuments(query),
                Application.find(query)
                           .skip(+offset)
                           .limit(+limit)
            ]);
    
            return res.json({
                total,
                logs
            });
        }catch (error) {
			return res.status(400).json({
				msg : "Error getting the applications"
			});
		}
    }

    async getById(req, res, next){
		const { id } = req.params;

		try{
			const app = await Application.findById(id);
			return res.json(app);

		}catch (error) {
			return res.status(400).json({
				msg : "Error getting the application"
			});
		}

	}

    async create(req, res, next){
        const data = req.body;

        try{
            const app = new Application(data);
            await app.save();

            return res.status(201).json(app);
        }catch (error) {
			return res.status(400).json({
				msg : "Error creating the application"
			});
		}
    }

    async update(req, res, next){
		const { id } = req.params;
		const data = req.body;

		try {
			const app = await Application.findByIdAndUpdate(id, data, { new: true });
			
			return res.json(app);
		} catch (error) {
			return res.status(400).json({
				msg : "Error updating the application"
			});
		}
	}

	async delete(req, res, next){
		const { id } = req.params;

		try{
			const app = await Application.findByIdAndUpdate(id, { deleted : true }, { new : true });
			return res.json(app);
		}catch (error) {
			return res.status(400).json({
				msg : "Error deleting the application"
			});
		}
	}
}

module.exports = new ApplicationController();