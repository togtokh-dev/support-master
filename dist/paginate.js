"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const paginate = (page, limit, total) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.default = paginate;
