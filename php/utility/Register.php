<?php
declare(strict_types=1);

// SpiderManMovies SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

SpiderManMoviesUtility::setRegistrar(function (SpiderManMoviesUtility $u): void {
    $u->clean = [SpiderManMoviesClean::class, 'call'];
    $u->done = [SpiderManMoviesDone::class, 'call'];
    $u->make_error = [SpiderManMoviesMakeError::class, 'call'];
    $u->feature_add = [SpiderManMoviesFeatureAdd::class, 'call'];
    $u->feature_hook = [SpiderManMoviesFeatureHook::class, 'call'];
    $u->feature_init = [SpiderManMoviesFeatureInit::class, 'call'];
    $u->fetcher = [SpiderManMoviesFetcher::class, 'call'];
    $u->make_fetch_def = [SpiderManMoviesMakeFetchDef::class, 'call'];
    $u->make_context = [SpiderManMoviesMakeContext::class, 'call'];
    $u->make_options = [SpiderManMoviesMakeOptions::class, 'call'];
    $u->make_request = [SpiderManMoviesMakeRequest::class, 'call'];
    $u->make_response = [SpiderManMoviesMakeResponse::class, 'call'];
    $u->make_result = [SpiderManMoviesMakeResult::class, 'call'];
    $u->make_point = [SpiderManMoviesMakePoint::class, 'call'];
    $u->make_spec = [SpiderManMoviesMakeSpec::class, 'call'];
    $u->make_url = [SpiderManMoviesMakeUrl::class, 'call'];
    $u->param = [SpiderManMoviesParam::class, 'call'];
    $u->prepare_auth = [SpiderManMoviesPrepareAuth::class, 'call'];
    $u->prepare_body = [SpiderManMoviesPrepareBody::class, 'call'];
    $u->prepare_headers = [SpiderManMoviesPrepareHeaders::class, 'call'];
    $u->prepare_method = [SpiderManMoviesPrepareMethod::class, 'call'];
    $u->prepare_params = [SpiderManMoviesPrepareParams::class, 'call'];
    $u->prepare_path = [SpiderManMoviesPreparePath::class, 'call'];
    $u->prepare_query = [SpiderManMoviesPrepareQuery::class, 'call'];
    $u->result_basic = [SpiderManMoviesResultBasic::class, 'call'];
    $u->result_body = [SpiderManMoviesResultBody::class, 'call'];
    $u->result_headers = [SpiderManMoviesResultHeaders::class, 'call'];
    $u->transform_request = [SpiderManMoviesTransformRequest::class, 'call'];
    $u->transform_response = [SpiderManMoviesTransformResponse::class, 'call'];
});
