import express from 'express'
import multer from 'multer'
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const router = express.Router()
import {
	uploadImage,
} from '../controllers/upload.controller.js'

router
	.route('/')
	.post(upload.single('image'), uploadImage)

export default router