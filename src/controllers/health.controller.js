import httpStatus from 'http-status'
import catchAsync from '../utils/catchAsync.js'

//
// GET /health
//
// @description A controller to check the health of the system
//
const getHealth = catchAsync(async (req, res) => {

	res.status(httpStatus.OK).json('🌍')
})

export default getHealth