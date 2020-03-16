module.exports = {
  initializePagination: (req) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const offset = limit * (page - 1);
    const paginationInit = {
      page,
      limit,
      offset
    };
    return paginationInit;
  }
};
