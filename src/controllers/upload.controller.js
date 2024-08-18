import httpStatus from 'http-status'
import catchAsync from '../utils/catchAsync.js'
import ApiError from '../utils/ApiError.js'
import uploadImageToBB from '../services/uploadImageToBB.js'

//
// POST /upload
//
// @description A controller to check the health of the system
//
const uploadImage = catchAsync(async (req, res) => {

	// get the image buffer to upload
	const file = req.file

	// check if file exists
	if (!file) {
		throw new ApiError(httpStatus.NOT_ACCEPTABLE, 'File wasn\'t provided!')
	}

	// upload image 
	const url = await uploadImageToBB(file.buffer)

	res.status(httpStatus.OK).json({
		url
	})
})

export {
	uploadImage
}