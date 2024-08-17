import config from './config/config.js'
import logger from './utils/logger.js'
import { connect } from 'mongoose'
import app from './app.js'

// Connect to DB and Start Server
let server
connect(config.mongo.URL).then(() => {
	logger.info('🔑 Connected to MongoDB!')
	server = app.listen(config.server.PORT, () => {
		logger.info(`📡 Listening to port ${config.server.PORT}!`)
	})
})

const exitHandler = () => {
	if (server) {
		server.close(() => {
			logger.info('❌ Server closed!')
			process.exit(1)
		})
	} else {
		process.exit(1)
	}
}

const unexpectedErrorHandler = (error) => {
	logger.error(error)
	exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)


process.on('SIGTERM', () => {
	logger.info(`Received a SIGTERM signal!`)
	if (server) {
		server.close(() => {
			process.exit(0)
		})
	}
})

process.on('SIGINT', () => {
	logger.info(`Received a SIGINT signal!`)
	if (server) {
		server.close(() => {
			process.exit(0)
		})
	}
})

