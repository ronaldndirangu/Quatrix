const Pagination = require('../helpers/pagination');
const Task = require('../database/models').Task;

module.exports = {
  list: async (req, res) => {
    try {
      const { page, limit, offset, orderMethod, order } = Pagination.initializePagination(req);
      const { count, rows } = await Task.findAndCountAll({ offset, limit, order: [[order, orderMethod]] });

      return res.status(200).send({
        page,
        perPage: limit,
        totalTasks: count,
        tasks: rows
      });
    } catch (error) {
      return res.status(500).send({
        message: error.message || 'Something bad happened!'
      });
    }
  }
};
