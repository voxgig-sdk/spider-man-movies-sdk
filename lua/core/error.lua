-- SpiderManMovies SDK error

local SpiderManMoviesError = {}
SpiderManMoviesError.__index = SpiderManMoviesError


function SpiderManMoviesError.new(code, msg, ctx)
  local self = setmetatable({}, SpiderManMoviesError)
  self.is_sdk_error = true
  self.sdk = "SpiderManMovies"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function SpiderManMoviesError:error()
  return self.msg
end


function SpiderManMoviesError:__tostring()
  return self.msg
end


return SpiderManMoviesError
