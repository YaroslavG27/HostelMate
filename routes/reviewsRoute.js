import express from 'express'

const router = express.Router()

router.get('/reviews', (req, res) => {
  res.send('Hello from reviews!')
})

export default router
