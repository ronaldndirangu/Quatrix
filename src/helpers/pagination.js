module.exports = {
  initializePagination: (req) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    const order = req.query.order || 'id';
    const orderMethod = req.query.orderMethod || 'ASC';
    const offset = limit * (page - 1);
    const paginationInit = {
      page,
      order,
      limit,
      offset,
      orderMethod
    };
    return paginationInit;
  }
};
