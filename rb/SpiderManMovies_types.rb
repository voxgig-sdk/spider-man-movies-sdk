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

# Request payload for Justwatch#load.
#
# @!attribute [rw] l
#   @return [Object, nil]
#
# @!attribute [rw] q
#   @return [Object]
JustwatchLoadMatch = Struct.new(
  :l,
  :q,
  keyword_init: true
)

# Media entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Media = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Media#load.
#
# @!attribute [rw] id
#   @return [String]
MediaLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Photo entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Photo = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Photo#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] h
#   @return [Object, nil]
#
# @!attribute [rw] w
#   @return [Object, nil]
PhotoLoadMatch = Struct.new(
  :id,
  :h,
  :w,
  keyword_init: true
)

# Search entity data model.
class Search
end

# Request payload for Search#load.
#
# @!attribute [rw] lsn
#   @return [Object, nil]
#
# @!attribute [rw] q
#   @return [Object, nil]
#
# @!attribute [rw] tt
#   @return [Object, nil]
#
# @!attribute [rw] v
#   @return [Object, nil]
SearchLoadMatch = Struct.new(
  :lsn,
  :q,
  :tt,
  :v,
  keyword_init: true
)

