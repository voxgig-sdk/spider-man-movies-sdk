# SpiderManMovies SDK utility: make_context

from core.context import SpiderManMoviesContext


def make_context_util(ctxmap, basectx):
    return SpiderManMoviesContext(ctxmap, basectx)
