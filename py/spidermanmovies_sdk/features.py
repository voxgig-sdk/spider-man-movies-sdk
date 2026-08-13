# SpiderManMovies SDK feature factory

from spidermanmovies_sdk.feature.base_feature import SpiderManMoviesBaseFeature
from spidermanmovies_sdk.feature.test_feature import SpiderManMoviesTestFeature


def _make_feature(name):
    features = {
        "base": lambda: SpiderManMoviesBaseFeature(),
        "test": lambda: SpiderManMoviesTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
