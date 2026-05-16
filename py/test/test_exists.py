# ProjectName SDK exists test

import pytest
from spidermanmovies_sdk import SpiderManMoviesSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = SpiderManMoviesSDK.test(None, None)
        assert testsdk is not None
