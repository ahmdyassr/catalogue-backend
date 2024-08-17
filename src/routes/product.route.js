import express from 'express'
const router = express.Router()
import {
	getProducts,
	addProduct,
	getProduct,
	updateProduct,
	deleteProduct
} from '../controllers/product.controller.js'

router
	.route('/')
	.get(getProducts)

router
	.route('/:id')
	.get(getProduct)

router
	.route('/:id')
	.put(updateProduct)

router
	.route('/:id')
	.delete(deleteProduct)

router
	.route('/')
	.post(addProduct)

export default router