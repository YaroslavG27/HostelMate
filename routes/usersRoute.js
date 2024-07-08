import express from 'express'
const router = express.Router()

// Define routes
router.get('/users', (req, res) => {
  res.send('Hello from the users!')
})

// Export the router to use it in your main app
export default router
