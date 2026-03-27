import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import contactRouter from './routes/contact.js'
import githubRouter from './routes/github.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/contact', contactRouter)
app.use('/api/github', githubRouter)

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Connect to MongoDB (optional — server starts even without DB)
const MONGO_URI = process.env.MONGO_URI
if (MONGO_URI) {
    mongoose.connect(MONGO_URI)
        .then(() => console.log('✅ MongoDB connected'))
        .catch((err) => console.error('❌ MongoDB connection error:', err.message))
} else {
    console.log('⚠️  MONGO_URI not set — running without database')
}

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})
