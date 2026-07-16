<?php
declare(strict_types=1);

// SpiderManMovies SDK base feature

class SpiderManMoviesBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(SpiderManMoviesContext $ctx, array $options): void {}
    public function PostConstruct(SpiderManMoviesContext $ctx): void {}
    public function PostConstructEntity(SpiderManMoviesContext $ctx): void {}
    public function SetData(SpiderManMoviesContext $ctx): void {}
    public function GetData(SpiderManMoviesContext $ctx): void {}
    public function GetMatch(SpiderManMoviesContext $ctx): void {}
    public function SetMatch(SpiderManMoviesContext $ctx): void {}
    public function PrePoint(SpiderManMoviesContext $ctx): void {}
    public function PreSpec(SpiderManMoviesContext $ctx): void {}
    public function PreRequest(SpiderManMoviesContext $ctx): void {}
    public function PreResponse(SpiderManMoviesContext $ctx): void {}
    public function PreResult(SpiderManMoviesContext $ctx): void {}
    public function PreDone(SpiderManMoviesContext $ctx): void {}
    public function PreUnexpected(SpiderManMoviesContext $ctx): void {}
}
