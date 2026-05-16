<?php
declare(strict_types=1);

// SpiderManMovies SDK utility: result_body

class SpiderManMoviesResultBody
{
    public static function call(SpiderManMoviesContext $ctx): ?SpiderManMoviesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
