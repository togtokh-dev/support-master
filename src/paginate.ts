const paginate = async (page: number, limit: number, total: number) => {
  const pageCount = Math.ceil(total / limit);
  const start = (page - 1) * limit + 1;
  const skip = (page - 1) * limit;
  let end = start + limit - 1;
  if (end > total) end = total;
  const Pagination: {
    total: number;
    pageCount: number;
    start: number;
    end: number;
    skip: number;
    nextPage: number;
    prevPage: number;
  } = { total, pageCount, start, end, skip, nextPage: null, prevPage: null };

  if (page < pageCount) Pagination.nextPage = page + 1;
  if (page > 1) Pagination.prevPage = page - 1;
  return Pagination;
};

export default paginate;
