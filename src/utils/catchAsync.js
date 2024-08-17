// catchAsync
//
// @description catch error from promises and move them to the error middleware

const catchAsync = (fn) => {
	return (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch((e) => next(e))
	}
}

export default catchAsync