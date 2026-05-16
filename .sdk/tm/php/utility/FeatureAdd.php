<?php
declare(strict_types=1);

// SpiderManMovies SDK utility: feature_add

class SpiderManMoviesFeatureAdd
{
    public static function call(SpiderManMoviesContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
