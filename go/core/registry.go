package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewJustwatchEntityFunc func(client *SpiderManMoviesSDK, entopts map[string]any) SpiderManMoviesEntity

var NewMediaEntityFunc func(client *SpiderManMoviesSDK, entopts map[string]any) SpiderManMoviesEntity

var NewPhotoEntityFunc func(client *SpiderManMoviesSDK, entopts map[string]any) SpiderManMoviesEntity

var NewSearchEntityFunc func(client *SpiderManMoviesSDK, entopts map[string]any) SpiderManMoviesEntity

