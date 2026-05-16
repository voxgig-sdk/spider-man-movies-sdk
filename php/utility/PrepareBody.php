<?php
declare(strict_types=1);

// SpiderManMovies SDK utility: prepare_body

class SpiderManMoviesPrepareBody
{
    public static function call(SpiderManMoviesContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
