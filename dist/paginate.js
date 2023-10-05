"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paginate = async (page, limit, total) => {
    const pageCount = Math.ceil(total / limit);
    const start = (page - 1) * limit + 1;
    const skip = (page - 1) * limit;
    let end = start + limit - 1;
    if (end > total)
        end = total;
    const Pagination = { total, pageCount, start, end, skip, nextPage: null, prevPage: null };
    if (page < pageCount)
        Pagination.nextPage = page + 1;
    if (page > 1)
        Pagination.prevPage = page - 1;
    return Pagination;
};
exports.default = paginate;
