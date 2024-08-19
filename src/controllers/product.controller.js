import httpStatus from 'http-status'
import catchAsync from '../utils/catchAsync.js'
import Product from '../models/product.model.js'

//
// GET /products
//
// @description A controller to get all products
//
const getProducts = catchAsync(async (req, res) => {

	// get search query
	const { query } = req.query

	// construct filter
	let filter = {}
	if (query) {
		filter.$text = { $search: query };
	}

	// get all products
	const products = await Product.find(filter)

	// send it back
	res.status(httpStatus.OK).json(products)
})

//
// GET /products/:id
//
// @description A controller to get individual product by its id
//
const getProduct = catchAsync(async (req, res) => {

	// get the target product id
	const productId = req.params.id

	// find the product
	const product = await Product.findById(productId)

	// send it back
	res.status(httpStatus.OK).json(product)
})

//
// POST /products
//
// @description A controller to add a new product
//
const addProduct = catchAsync(async (req, res) => {

	// create the product
	const product = await Product.create(req.body)

	// send it back
	res.status(httpStatus.CREATED).json(product)
})

//
// PUT /products
//
// @description A controller to update a product by its id
//
const updateProduct = catchAsync(async (req, res) => {

	// get the target product id
	const productId = req.params.id

	// create the product
	const product = await Product.findByIdAndUpdate(productId, req.body, {
		new: true
	})

	// send it back
	res.status(httpStatus.OK).json(product)
})


//
// DELETE /products/:id
//
// @description A controller to delete a product by its id
//
const deleteProduct = catchAsync(async (req, res) => {

	// get the target product id
	const productId = req.params.id

	// find the product and delete it
	const product = await Product.findByIdAndDelete(productId)

	// send it back
	res.status(httpStatus.OK).json(product)
})


export {
	getProducts,
	getProduct,
	updateProduct,
	deleteProduct,
	addProduct
}