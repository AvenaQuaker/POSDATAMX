import express from 'express'
import { getBotReply } from '../Bot/classifier.js'

const router = express.Router()

router.post('/', (req, res) => {
    const message = req.body.text
    const reply = getBotReply(message)
    res.json({ reply })
})
export default router