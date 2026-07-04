# frozen_string_literal: true

# Typed models for the SpiderManMovies SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Justwatch entity data model.
class Justwatch
end

# Match filter for Justwatch#load (any subset of Justwatch fields).
class JustwatchLoadMatch
end

# Media entity data model.
class Media
end

# Request payload for Media#load.
#
# @!attribute [rw] id
#   @return [String]
MediaLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Photo entity data model.
class Photo
end

# Request payload for Photo#load.
#
# @!attribute [rw] id
#   @return [String]
PhotoLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Search entity data model.
class Search
end

# Match filter for Search#load (any subset of Search fields).
class SearchLoadMatch
end

