<?php
declare(strict_types=1);

// SpiderManMovies SDK utility: feature_hook

class SpiderManMoviesFeatureHook
{
    public static function call(SpiderManMoviesContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
