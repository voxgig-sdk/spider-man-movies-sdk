<?php
declare(strict_types=1);

// SpiderManMovies SDK utility: prepare_headers

class SpiderManMoviesPrepareHeaders
{
    public static function call(SpiderManMoviesContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
