# SpiderManMovies SDK feature factory

from feature.base_feature import SpiderManMoviesBaseFeature
from feature.test_feature import SpiderManMoviesTestFeature


def _make_feature(name):
    features = {
        "base": lambda: SpiderManMoviesBaseFeature(),
        "test": lambda: SpiderManMoviesTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
