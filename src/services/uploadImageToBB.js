import axios from 'axios';
import FormData from 'form-data';
import config from '../config/config.js';

//
// uploadImageToBB
//
// @param {Buffer}
// @return {String}
//
const uploadImageToBB = async (imageBuffer) => {
	try {
		const formData = new FormData();
		formData.append('image', imageBuffer.toString('base64'));

		const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
			params: {
				key: config.imgbb.API_KEY,
			},
			headers: formData.getHeaders(),
		});

		if (response.data.success) {
			return response.data.data.url;
		} else {
			throw new Error('Failed to upload image to ImgBB')
		}
	} catch (error) {
		console.error('Error uploading image to ImgBB:', error)
		throw error
	}
}

export default uploadImageToBB;
