-- SpiderManMovies SDK exists test

local sdk = require("spider-man-movies_sdk")

describe("SpiderManMoviesSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
