# SpiderManMovies SDK utility: make_context
require_relative '../core/context'
module SpiderManMoviesUtilities
  MakeContext = ->(ctxmap, basectx) {
    SpiderManMoviesContext.new(ctxmap, basectx)
  }
end
