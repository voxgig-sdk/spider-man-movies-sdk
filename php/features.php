<?php
declare(strict_types=1);

// SpiderManMovies SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class SpiderManMoviesFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new SpiderManMoviesBaseFeature();
            case "test":
                return new SpiderManMoviesTestFeature();
            default:
                return new SpiderManMoviesBaseFeature();
        }
    }
}
