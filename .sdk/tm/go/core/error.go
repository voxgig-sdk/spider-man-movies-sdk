package core

type SpiderManMoviesError struct {
	IsSpiderManMoviesError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewSpiderManMoviesError(code string, msg string, ctx *Context) *SpiderManMoviesError {
	return &SpiderManMoviesError{
		IsSpiderManMoviesError: true,
		Sdk:              "SpiderManMovies",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *SpiderManMoviesError) Error() string {
	return e.Msg
}
