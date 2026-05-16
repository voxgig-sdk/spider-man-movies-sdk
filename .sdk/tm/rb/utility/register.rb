# SpiderManMovies SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

SpiderManMoviesUtility.registrar = ->(u) {
  u.clean = SpiderManMoviesUtilities::Clean
  u.done = SpiderManMoviesUtilities::Done
  u.make_error = SpiderManMoviesUtilities::MakeError
  u.feature_add = SpiderManMoviesUtilities::FeatureAdd
  u.feature_hook = SpiderManMoviesUtilities::FeatureHook
  u.feature_init = SpiderManMoviesUtilities::FeatureInit
  u.fetcher = SpiderManMoviesUtilities::Fetcher
  u.make_fetch_def = SpiderManMoviesUtilities::MakeFetchDef
  u.make_context = SpiderManMoviesUtilities::MakeContext
  u.make_options = SpiderManMoviesUtilities::MakeOptions
  u.make_request = SpiderManMoviesUtilities::MakeRequest
  u.make_response = SpiderManMoviesUtilities::MakeResponse
  u.make_result = SpiderManMoviesUtilities::MakeResult
  u.make_point = SpiderManMoviesUtilities::MakePoint
  u.make_spec = SpiderManMoviesUtilities::MakeSpec
  u.make_url = SpiderManMoviesUtilities::MakeUrl
  u.param = SpiderManMoviesUtilities::Param
  u.prepare_auth = SpiderManMoviesUtilities::PrepareAuth
  u.prepare_body = SpiderManMoviesUtilities::PrepareBody
  u.prepare_headers = SpiderManMoviesUtilities::PrepareHeaders
  u.prepare_method = SpiderManMoviesUtilities::PrepareMethod
  u.prepare_params = SpiderManMoviesUtilities::PrepareParams
  u.prepare_path = SpiderManMoviesUtilities::PreparePath
  u.prepare_query = SpiderManMoviesUtilities::PrepareQuery
  u.result_basic = SpiderManMoviesUtilities::ResultBasic
  u.result_body = SpiderManMoviesUtilities::ResultBody
  u.result_headers = SpiderManMoviesUtilities::ResultHeaders
  u.transform_request = SpiderManMoviesUtilities::TransformRequest
  u.transform_response = SpiderManMoviesUtilities::TransformResponse
}
