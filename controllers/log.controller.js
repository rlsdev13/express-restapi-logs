'use strinct';
const Logs = require('../schemas/log.schema');

class LogsController {

	async all(req, res, next){
		const { limit = 5, offset = 0 } = req.query;
		const query = { deleted : false }

		try{
			const [total, logs] = await Promise.all([
				Logs.countDocuments(query),
				Logs.find(query)
					.populate('application_id')
					.skip(+offset)
					.limit(+limit)
			]);
	
			return res.json({
				total,
				logs
			});
		}catch (error) {
			return res.status(400).json({
				msg : "Error getting logs"
			});
		}
	}

	async getById(req, res, next){
		const { id } = req.params;

		try{
			const log = await Logs.findById(id).populate('application_id');
			return res.json(log);

		}catch (error) {
			return res.status(400).json({
				msg : "Error getting the log"
			});
		}

	}

	async create(req, res, next){
		const data = req.body;
		
		try{
			const log = new Logs(data);
			await log.save();

			return res.status(201).json(log);
		}catch (error) {
			return res.status(400).json({
				msg : "Error creating the log"
			});
		}
	}

	async update(req, res, next){
		const { id } = req.params;
		const data = req.body;

		try {
			const log = await Logs.findByIdAndUpdate(id, data, { new: true })
								  .populate('application_id');
			
			return res.json(log);
		} catch (error) {
			return res.status(400).json({
				msg : "Error updating the log"
			});
		}
	}

	async delete(req, res, next){
		const { id } = req.params;

		try{
			const log = await Logs.findByIdAndUpdate(id, { deleted : true }, { new : true });
			return res.json(log);
		}catch (error) {
			return res.status(400).json({
				msg : "Error deleting the log"
			});
		}
	}
}

module.exports = new LogsController();
