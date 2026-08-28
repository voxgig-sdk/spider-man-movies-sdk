-- Typed models for the SpiderManMovies SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Justwatch

---@class JustwatchLoadMatch
---@field l? any
---@field q any

---@class Media
---@field id? string

---@class MediaLoadMatch
---@field id string

---@class Photo
---@field id? string

---@class PhotoLoadMatch
---@field id string
---@field h? any
---@field w? any

---@class Search

---@class SearchLoadMatch
---@field lsn? any
---@field q? any
---@field tt? any
---@field v? any

local M = {}

return M
