declare const paginate: (page: number, limit: number, total: number) => Promise<{
    total: number;
    pageCount: number;
    start: number;
    end: number;
    skip: number;
    nextPage: number;
    prevPage: number;
}>;
export default paginate;
