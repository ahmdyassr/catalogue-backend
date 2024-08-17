import express from 'express'
const router = express.Router()
import getHealth from '../controllers/health.controller.js'

router
	.route('/')
	.get(getHealth)

export default router