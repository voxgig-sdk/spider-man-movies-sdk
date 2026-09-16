# SpiderManMovies SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module SpiderManMoviesFeatures
  def self.make_feature(name)
    case name
    when "base"
      SpiderManMoviesBaseFeature.new
    when "ratelimit"
      SpiderManMoviesRatelimitFeature.new
    when "retry"
      SpiderManMoviesRetryFeature.new
    when "test"
      SpiderManMoviesTestFeature.new
    when "timeout"
      SpiderManMoviesTimeoutFeature.new
    else
      SpiderManMoviesBaseFeature.new
    end
  end
end
