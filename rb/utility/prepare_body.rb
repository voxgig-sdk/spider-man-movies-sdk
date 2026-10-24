# SpiderManMovies SDK utility: prepare_body
require_relative 'media'
module SpiderManMoviesUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return SpiderManMoviesUtilities.raw_body(ctx.reqdata) if SpiderManMoviesUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
