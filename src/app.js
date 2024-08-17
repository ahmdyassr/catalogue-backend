import config from './config/config.js'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import httpStatus from 'http-status'
import { pinoHttp } from 'pino-http'

// routes
import healthRouter from './routes/health.route.js'


// middlewares
import { errorConverter, errorHandler } from './middlewares/error.middleware.js'
import ApiError from './utils/ApiError.js'

// Assign a new express app
const app = express()

// Parse Cookies
app.use(cookieParser())

// HTTP Logger
app.use(pinoHttp())

// Set security HTTP headers
app.use(helmet())

// Enable cors
app.use(cors({
	credentials: true,
	origin: config.server.FRONTEND_URL
}))


// Routes
app.use('/health', healthRouter)


// send back a 404 error for any unknown api request
app.use((req, res, next) => {
	next(new ApiError(httpStatus.NOT_FOUND, 'Not found!'))
})

// Convert error to ApiError, if needed
app.use(errorConverter)

// Handle error
app.use(errorHandler)

export default app