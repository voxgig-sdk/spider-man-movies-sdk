// Typed models for the SpiderManMovies SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Justwatch {
}

export interface JustwatchLoadMatch {
  l?: string
  q: string
}

export interface Media {
  id?: string
}

export interface MediaLoadMatch {
  id: string
}

export interface Photo {
  id?: string
}

export interface PhotoLoadMatch {
  id: string
  h?: number
  w?: number
}

export interface Search {
}

export interface SearchLoadMatch {
  lsn?: number
  q?: string
  tt?: string
  v?: number
}

