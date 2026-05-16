# SpiderManMovies SDK utility: feature_add
module SpiderManMoviesUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
