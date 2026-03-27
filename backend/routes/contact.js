import express from 'express'
import mongoose from 'mongoose'

const router = express.Router()

// Contact Message Schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

// POST /api/contact — save a new contact message
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        const contact = new Contact({ name, email, message })
        await contact.save()

        res.status(201).json({ message: 'Message saved successfully', contact })
    } catch (error) {
        console.error('Error saving contact:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

// GET /api/contact — get all messages (admin)
router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 })
        res.json(messages)
    } catch (error) {
        console.error('Error fetching contacts:', error)
        res.status(500).json({ error: 'Internal server error' })
    }
})

export default router
