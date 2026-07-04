<?php
declare(strict_types=1);

// Typed models for the SpiderManMovies SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Justwatch entity data model. */
class Justwatch
{
}

/** Match filter for Justwatch#load (any subset of Justwatch fields). */
class JustwatchLoadMatch
{
}

/** Media entity data model. */
class Media
{
}

/** Request payload for Media#load. */
class MediaLoadMatch
{
    public string $id;
}

/** Photo entity data model. */
class Photo
{
}

/** Request payload for Photo#load. */
class PhotoLoadMatch
{
    public string $id;
}

/** Search entity data model. */
class Search
{
}

/** Match filter for Search#load (any subset of Search fields). */
class SearchLoadMatch
{
}

