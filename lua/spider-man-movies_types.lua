-- Typed models for the SpiderManMovies SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Justwatch

---@class JustwatchLoadMatch
---@field l? string
---@field q string

---@class Media
---@field id? string

---@class MediaLoadMatch
---@field id string

---@class Photo
---@field id? string

---@class PhotoLoadMatch
---@field id string
---@field h? number
---@field w? number

---@class Search

---@class SearchLoadMatch
---@field lsn? number
---@field q? string
---@field tt? string
---@field v? number

local M = {}

return M
