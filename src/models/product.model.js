import mongoose from 'mongoose'

//
// Schema for the product 
//

// Custom field schema
const customFieldSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	value: {
		type: mongoose.Schema.Types.Mixed,
		required: true
	}
}, { _id: false })

// Product schema
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true
	},
	description: {
		type: String,
		trim: true
	},
	status: {
		type: String,
		enum: ['active', 'draft']
	},
	price: {
		type: Number
	},
	category: {
		type: String,
		trim: true
	},
	images: [{ type: String }],
	custom: [customFieldSchema]
}, {
	timestamps: true
})

// Connect to separate DB for Images
const productsDB = mongoose.connection.useDb('products')
const Product = productsDB.model('Product', productSchema)

export default Product