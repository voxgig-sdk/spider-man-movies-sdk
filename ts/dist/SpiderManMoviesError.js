"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiderManMoviesError = void 0;
class SpiderManMoviesError extends Error {
    isSpiderManMoviesError = true;
    sdk = 'SpiderManMovies';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.SpiderManMoviesError = SpiderManMoviesError;
//# sourceMappingURL=SpiderManMoviesError.js.map