# SpiderManMovies SDK feature factory

from spidermanmovies_sdk.feature.base_feature import SpiderManMoviesBaseFeature
from spidermanmovies_sdk.feature.ratelimit_feature import SpiderManMoviesRatelimitFeature
from spidermanmovies_sdk.feature.retry_feature import SpiderManMoviesRetryFeature
from spidermanmovies_sdk.feature.test_feature import SpiderManMoviesTestFeature
from spidermanmovies_sdk.feature.timeout_feature import SpiderManMoviesTimeoutFeature


_FEATURES = {
    "base": lambda: SpiderManMoviesBaseFeature(),
    "ratelimit": lambda: SpiderManMoviesRatelimitFeature(),
    "retry": lambda: SpiderManMoviesRetryFeature(),
    "test": lambda: SpiderManMoviesTestFeature(),
    "timeout": lambda: SpiderManMoviesTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
