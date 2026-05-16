<?php
declare(strict_types=1);

// SpiderManMovies SDK utility: result_headers

class SpiderManMoviesResultHeaders
{
    public static function call(SpiderManMoviesContext $ctx): ?SpiderManMoviesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
