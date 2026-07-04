# Typed models for the SpiderManMovies SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Justwatch:
    pass


@dataclass
class JustwatchLoadMatch:
    pass


@dataclass
class Media:
    pass


@dataclass
class MediaLoadMatch:
    id: str


@dataclass
class Photo:
    pass


@dataclass
class PhotoLoadMatch:
    id: str


@dataclass
class Search:
    pass


@dataclass
class SearchLoadMatch:
    pass

