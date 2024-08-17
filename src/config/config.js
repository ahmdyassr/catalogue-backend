//
// Config
//
// @description The place for managing all config constants
//

export default {
	server: {
		PORT: process.env.PORT,
		ENV: process.env.NODE_ENV,
		FRONTEND_URL: process.env.FRONTEND_URL
	},
	mongo: {
		URL: process.env.MONGO_URL
	},
}