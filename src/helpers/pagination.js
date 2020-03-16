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
  },
  getPaginationData: (page, limit, count) => {
    const pageCount = Math.ceil(count / limit);
    const pagination = {
      pageCount,
      currentPage: +page,
      dataCount: count
    };
    return pagination;
  }
};
