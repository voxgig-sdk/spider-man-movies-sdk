<?php
declare(strict_types=1);

// SpiderManMovies SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class SpiderManMoviesMakeContext
{
    public static function call(array $ctxmap, ?SpiderManMoviesContext $basectx): SpiderManMoviesContext
    {
        return new SpiderManMoviesContext($ctxmap, $basectx);
    }
}
