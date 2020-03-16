const Pagination = require('../helpers/pagination');
const Task = require('../database/models').Task;

module.exports = {
  list: async (req, res) => {
    try {
      const { page, limit, offset } = Pagination.initializePagination(req);
      const tasks = await Task.findAll({ offset, limit });
      const totalTasks = await Task.count();

      return res.status(200).send({
        totalTasks,
        page,
        perPage: limit,
        tasks
      });
    } catch (error) {
      return res.status(500).send({
        message: error.message || 'Something bad happened!'
      });
    }
  }
};
