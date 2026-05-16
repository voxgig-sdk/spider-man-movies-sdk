# SpiderManMovies SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module SpiderManMoviesFeatures
  def self.make_feature(name)
    case name
    when "base"
      SpiderManMoviesBaseFeature.new
    when "test"
      SpiderManMoviesTestFeature.new
    else
      SpiderManMoviesBaseFeature.new
    end
  end
end
